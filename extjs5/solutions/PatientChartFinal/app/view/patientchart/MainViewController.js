
Ext.define('PatientChart.view.patientchart.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientchartmainviewcontroller',
    requires: [
        'Ext.ux.panel.PDF',
        'Ext.ux.util.PDF.TextLayerBuilder',
        'Ext.ux.imageviewer.ImageViewer'
    ],
    config: {
        control: {
            'tabpanel': {
                'showpdf': 'onShowPdf',
                'showimage': 'onShowImage'
            }
        }
    },

    onShowPdf: function(tabpanelview, dv, title, url, record) {
        tabpanelview.add({
            xtype: 'pdfpanel',
            title: title,
            closable: true,
            pageScale: 1,
            src: 'http://webapps.figleaf.com/webservices/media/' + url
        });
    },

    onShowImage: function(tabpanelview, dv, title, url, record) {
        tabpanelview.add({
            xtype: 'extimageviewer',
            title: title,
            closable: true,
            src: 'http://webapps.figleaf.com/webservices/media/' + url,
            imageTitle: record.get('title') + ' on ' + Ext.Date.format(record.get('date'),"m/d/Y @ H:i")
        });
    },

    onPatientDailyStatsLoad: function(store) {
        this.getViewModel().set('selectedStat', store.last());
    },

    loadPatientRecord: function(patientId) {

        // load record
        PatientChart.model.Patient.load(patientId, {
            scope: this,
            failure: function(record, operation) {
                //do something if the load failed
                Ext.Msg.alert("Transaction Failed", "Check the Browser Console Log");
                console.log(arguments);
            },
            success: function(record, operation) {
                //do something if the load succeeded

                this.getViewModel().set('patient', record);
                this.lookupReference('patientform').loadRecord(record);
            },
        });


    },

    onSavePatientInfo: function(tool, e, owner, eOpts) {
        var form = this.lookupReference('patientform');

        var m = Ext.create('PatientChart.model.Patient');
        form.updateRecord(m);

        // special case: handle checkbox group 
        var cb = this.lookupReference('preexistingconditions').getValue().preexistingconditions;
        if (!cb) {
            cb = [];
        } else if (typeof cb != 'array') {
            cb = [cb];
        }
        m.set('preexistingconditions', cb);

        m.save({
            success: function() {

            }
        });

        form.submit({
            url: 'http://webapps.figleaf.com/rest/prototypes/patient.json',
            standardSubmit: false,
            success: function(form, action) {
                Ext.Msg.alert("Success!");
            },
            failure: function(form, action) {
                switch (action.failureType) {
                    case Ext.form.action.Action.CLIENT_INVALID:
                        Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                        break;
                    case Ext.form.action.Action.CONNECT_FAILURE:
                        Ext.Msg.alert('Failure', 'Ajax communication failed');
                        break;
                    case Ext.form.action.Action.SERVER_INVALID:
                        Ext.Msg.alert('Failure', action.result.msg);
                }
            }
        });

    },

    onFormBeforeRender: function(component, eOpts) {
        var pc = this.lookupReference('preexistingconditions');
        var s = Ext.getStore('PreExistingConditions');
        if (s.getCount() == 0) {
            Ext.defer(this.onFormBeforeRender, 100, this, [component, eOpts]);
        } else {
            pc.removeAll();
            var cboxes = [];
            for (var i = 0; i < s.getCount(); i++) {
                cboxes.push({
                    xtype: 'checkbox',
                    name: 'preexistingconditions',
                    boxLabel: s.getAt(i).get('text'),
                    inputValue: s.getAt(i).get('id')
                });
            }
            pc.add(cboxes);
        }
    },

    onPatientChartTabChange: function(tabpanel, newCard, oldCard, eOpts) {
        var hash = location.hash.substring(1, location.hash.length);
        var hashArr = hash.split('/');
        var newHash = hashArr[0] + "/" + hashArr[1] + "/" + newCard.reference;
        this.redirectTo(newHash);
    }

});