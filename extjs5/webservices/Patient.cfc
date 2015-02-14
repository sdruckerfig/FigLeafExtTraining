<cfcomponent 
  rest="true" 
  restpath="patient"
  extends="base"> 


<cffunction name="getClientFileName" returntype="string" output="false" access="private" hint="">
  <cfargument name="fieldName" required="true" type="string" hint="Name of the Form field" />

  <cfset var tmpPartsArray = Form.getPartsArray() />

  <cfif IsDefined("tmpPartsArray")>
    <cfloop array="#tmpPartsArray#" index="local.tmpPart">
      <cfif local.tmpPart.isFile() AND local.tmpPart.getName() EQ arguments.fieldName> 
        <cfreturn local.tmpPart.getFileName() />
      </cfif>
    </cfloop>
  </cfif>
  
  <cfreturn "" />
</cffunction>

<cffunction name="GetData" access="remote" httpmethod="GET" returntype="struct">
 
  <cfargument name="filter" required="false" type="string" default="[]"  restargsource="query">
  <cfargument name="sorter" required="false" type="string" default="[]"  restargsource="query">
  <cfargument name="limit" required="false" type="numeric" default="100" restargsource="query">
  <cfargument name="start" required="false" type="numeric" default="1"   restargsource="query">
  
  <cfset var local.filter = deserializejson(filter)>

  <cfquery name="local.qCount">
    select count(*) as thecount
    from patient
    where endtime is null
     <cfif arraylen(local.filter) gt 0>
       and (
       0=1
       <cfloop array="#local.filter#" index="local.thisfilter">
          or
          lastname
            like <cfqueryparam cfsqltype="cf_sql_varchar" value="#thisfilter.value#%">
       </cfloop> 
      )
    </cfif>
  </cfquery>

  <cfquery name="local.data">
    select id,firstName,lastName,address,email,photoUrl
    from patient
    where endtime is null
    <cfif arraylen(local.filter) gt 0>
       and (
       0=1
       <cfloop array="#local.filter#" index="local.thisfilter">
          or
          lastname
            like <cfqueryparam cfsqltype="cf_sql_varchar" value="#thisfilter.value#%">
       </cfloop> 
      )
    </cfif>


    limit  <cfqueryparam cfsqltype="cf_sql_numeric" value="#arguments.start#">,
           <cfqueryparam cfsqltype="cf_sql_numeric" value="#arguments.limit#">

  </cfquery>
 

 <cfset out = {
   "records" = query2array(local.data),
   "success" = true,
   "total" = local.qCount.thecount
 }>

 <!---
  <cfset out = query2array(local.data)>
--->

 <cfreturn out>

</cffunction>

<cffunction name="getdetail" 
            access="remote"
            returntype="struct"
            httpMethod="get"
            restpath="{id}">
  
 <cfargument name="id" type="string" required="true" restargsource="Path">

 <cfquery name="local.q">
   select *
   from patient
   where id = <cfqueryparam 
        cfsqltype="cf_sql_numeric"
        value="#arguments.id#">
 </cfquery>

 <cfquery name="local.conditions">
    select preexistingcondition.id,preexistingcondition.text
    from preexistingcondition inner join
     patientpreexistingcondition
       on preexistingcondition.id = patientpreexistingcondition.preexistingconditionid
    where patientpreexistingcondition.patientid = <cfqueryparam 
        cfsqltype="cf_sql_numeric"
        value="#arguments.id#">
 </cfquery>


 <cfquery name="local.allergies">
    select allergy.id,allergy.text
    from allergy inner join
     patientallergy
       on allergy.id = patientallergy.allergyid
    where patientallergy.patientid = <cfqueryparam 
        cfsqltype="cf_sql_numeric"
        value="#arguments.id#">
 </cfquery>
<!---
 <cfset out = {
   "records" = query2array(local.q),
   "success" = true,
   "total" = 1
 }>
 --->



 <cfset local.patient =  query2array(local.q)[1]>
 <cfset local.patient["preexistingconditions"] = {
   "preexistingcondition" = listToArray(valuelist(local.conditions.id))
   }>
 <cfset local.patient["allergies"] = listToArray(valuelist(local.allergies.text))>
 <cfreturn local.patient>

</cffunction>

<cffunction name="createNew" 
            access="remote"
            returntype="any"
            httpMethod="post">
 
 <cfset var requestData = deserializeJson(toString(getHttpRequestData().content))>

 <cftransaction>

  <cfquery>
    insert into patient (
      firstName,
      lastName,
      email,
      address,
      city,
      state,
      zipcode,
      dob,
      notes,
      updateuser,
      updatedate,
      begintime
      )
    values (
      <cfqueryparam cfsqltype="cf_sql_varchar" value="#requestData.firstName#">,
      <cfqueryparam cfsqltype="cf_sql_varchar" value="#requestData.lastName#">,
      <cfqueryparam cfsqltype="cf_sql_varchar" value="#requestData.email#">,
      <cfqueryparam cfsqltype="cf_sql_varchar" value="#requestData.address#">,
      <cfqueryparam cfsqltype="cf_sql_varchar" value="#requestData.city#">,
      <cfqueryparam cfsqltype="cf_sql_varchar" value="#requestData.state#">,
      <cfqueryparam cfsqltype="cf_sql_varchar" value="#requestData.zipcode#">,
      <cfqueryparam cfsqltype="cf_sql_date" value="#requestData.dob#">,
      <cfqueryparam cfsqltype="cf_sql_longvarchar" value="#requestData.notes#">,
      <cfqueryparam cfsqltype="cf_sql_varchar" value="#session.username#">,
      <cfqueryparam cfsqltype="cf_sql_timestamp"
          value="#dateformat(now(),"mm/dd/yyyy")# #timeformat(now())#">,
     <cfqueryparam cfsqltype="cf_sql_timestamp"
          value="#dateformat(now(),"mm/dd/yyyy")# #timeformat(now())#">

    )
  </cfquery>

   <cfquery name="local.getlast">
    select LAST_INSERT_ID() as lastid
    from patient
   </cfquery>

 </cftransaction>

 


 <cfreturn {"success": true, "id": local.getlast.lastid}>




</cffunction>



</cfcomponent>