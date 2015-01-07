

Ext.define('PatientChart.view.navigation.Navigation', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.navigation',

    requires: [
        'PatientChart.view.navigation.NavigationViewModel',
        'PatientChart.view.navigation.NavigationViewController',
        'Ext.button.Split',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'PatientChart.view.about.About'
    ],

    controller: 'navigationviewcontroller',
    viewModel: {
        type: 'navigationviewmodel'
    },
    width: 150,
    defaults: {
        height: 45,
        margin: '0 0 10 0',
        toggleGroup: 'perspectives',
        allowDepress: false
    },
    bodyPadding: 5,
    header: false,
    title: 'Navigate',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            height: 30,
            pack: 'center',
            
            style: {
                'border-top-width' : '1px !important'
            },
            items : [
                {
                    xtype: 'tbtext',
                    flex: 1,
                    style: {
                        'text-align' : 'center'
                    },
                    bind: {
                        text: '{username}'
                    }
                }
            ]
        }
    ],

    items: [
        {
            xtype: 'component',
            width: 150,
            height: 133,
            cls: 'drextlogo'
        },
        {
            xtype: 'splitbutton',
            itemId: 'btnAdminPerspective',
            iconCls: 'btnAdminIcon',
            text: 'Administer',
            menu: {
                xtype: 'menu',
                width: 182,
                items: [
                    {
                        xtype: 'menuitem',
                        width: 138,
                        text: 'Allergies',
                        iconCls: 'nose',
                        listeners: {
                            click: 'onAllergiesClick'
                        }
                    },
                    {
                        xtype: 'menuitem',
                        text: 'Pre-Existing Conditions',
                        iconCls: 'bottleOfPills',
                        listeners: {
                            click: 'onPreExistingConditionsClick'
                        }
                    },
                    {
                        xtype: 'menuitem',
                        text: 'Billing Codes/Procedures',
                        iconCls: 'stethoscope',
                        listeners: {
                            click: 'onBillingCodesClick'
                        }
                    }
                ]
            },
            listeners: {
                click: 'onAdministrationClick',
                arrowclick: 'onAdminArrowClick'
            }
        },
        {
            xtype: 'splitbutton',
            itemId: 'btnPatientchartPerspective',
            iconCls: 'btnPatientsIcon',
            text: 'Patients',
            menu: {
                xtype: 'menu',
                width: 150,
                items: [
                    {
                        xtype: 'menuitem',
                        text: 'Search',
                        iconCls: 'patientFind',
                        listeners: {
                            click: 'onPatientSearch'
                        }
                    },
                    {
                        xtype: 'menuitem',
                        iconCls: 'patientAdd',
                        text: 'Add New'
                    }
                ]
            },
            listeners: {
                click: 'onPatientPerspectiveClick'
            }
        },
        {
            xtype: 'splitbutton',
            itemId: 'btnResearchPerspective',
            iconCls: 'btnResearchIcon',
            text: 'Research',
            menu: {
                xtype: 'menu',
                width: 150,
                items: [
                    {
                        xtype: 'menuitem',
                        text: 'Clinical Trials',
                        iconCls: 'injection',
                        listeners: {
                            click: 'onClinicalTrialsClick'
                        }
                    },
                    {
                        xtype: 'menuitem',
                        text: 'Hospital Stats',
                        iconCls: 'hospital',
                        listeners: {
                            click: 'onMenuitemClick'
                        }
                    }
                ]
            },
            listeners: {
                arrowclick: 'onResearchArrowClick',
                click: 'onResearchClick'
            }
        },
        {
            xtype: 'button',
            text: 'About',
            toggleGroup: null,
            iconCls: 'btnAbout',
            handler: function() {
                Ext.widget('about');
            }
        }
    ]

});