Ext.define('PatientChart.view.viewport.Navigation', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.navigation',

    requires: [
        'PatientChart.view.viewport.NavigationViewModel',
        'PatientChart.view.viewport.NavigationViewController',
        'Ext.button.Split',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'PatientChart.view.about.About',
        'Ext.ux.BoxReorderer'
    ],

    plugins: Ext.create('Ext.ux.BoxReorderer', {}),

    controller: 'navigationviewcontroller',
    viewModel: {
        type: 'navigationviewmodel'
    },
    width: 150,
    defaults: {
        height: 45,
        margin: '0 0 10 0',
        toggleGroup: 'perspectives',
        allowDepress: false,
        reorderable: true,
        xtype: 'splitbutton'
    },
    bodyPadding: 5,
    header: false,
    title: 'Navigate',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        height: 30,
        pack: 'center',

        style: {
            'border-top-width': '1px !important'
        },
        items: [{
            xtype: 'tbtext',
            flex: 1,
            style: {
                'text-align': 'center'
            },
            bind: {
                text: '{username}'
            }
        }]
    }],

    items: [{
        xtype: 'component',
        width: 150,
        height: 133,
        cls: 'drextlogo'
    }, {
        itemId: 'btnAdminPerspective',
        iconCls: 'btnAdminIcon',
        text: 'Administer',
        menu: {
            width: 182,
            items: [{
                xtype: 'menuitem',
                width: 138,
                text: 'Allergies',
                iconCls: 'nose',
                itemId: 'allergies',
            }, {
                xtype: 'menuitem',
                text: 'Pre-Existing Conditions',
                iconCls: 'bottleOfPills',
                itemId: 'preexistingconditions'
            }, {
                xtype: 'menuitem',
                text: 'Billing Codes/Procedures',
                iconCls: 'medicalBag',
                itemId: 'billingcodes'
            }],
            listeners: {
                click: 'onAdminMenuItemClick'
            }
        },
        listeners: {
            click: 'onAdministrationClick',
            arrowclick: 'onAdminArrowClick'
        }
    }, {
        itemId: 'btnPatientchartperspective',
        iconCls: 'btnPatientsIcon',
        text: 'Patients',
        menu: {
           
            width: 150,
            items: [{
                xtype: 'menuitem',
                text: 'Search',
                iconCls: 'patientFind',
                listeners: {
                    click: 'onPatientSearch'
                }
            }, {
                xtype: 'menuitem',
                iconCls: 'patientAdd',
                text: 'Add New'
            }]
        },
        listeners: {
            click: 'onPatientPerspectiveClick',
            arrowclick: 'onPatientPerspectiveClick'
        }
    }, {
        itemId: 'btnResearchPerspective',
        iconCls: 'btnResearchIcon',
        text: 'Research',
        menu: {
            
            width: 150,
            items: [{
                xtype: 'menuitem',
                text: 'Clinical Trials',
                iconCls: 'injection',
                listeners: {
                    click: 'onClinicalTrialsClick'
                }
            }, {
                xtype: 'menuitem',
                text: 'Hospital Stats',
                iconCls: 'hospital',
                listeners: {
                    click: 'onMenuitemClick'
                }
            }]
        },
        listeners: {
            arrowclick: 'onResearchArrowClick',
            click: 'onResearchClick'
        }
    }, {
        xtype: 'button',
        text: 'About',
        toggleGroup: null,
        iconCls: 'btnAbout',
        handler: function(b,e) {
            Ext.widget('about', {
                animateTarget: b
            });
        }
    }]

});