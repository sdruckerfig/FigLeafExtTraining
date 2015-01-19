Ext.define("PatientChart.view.viewport.Navigation", {
	extend: "Ext.panel.Panel",
	requires: [
		'PatientChart.view.viewport.NavigationController',
		'Ext.button.Button',
		'Ext.button.Split',
		'Ext.menu.Menu',
		'Ext.menu.Item'
	],
	controller: "viewport-navigation",
	alias: 'widget.mainnavbar',

	width: 150,
	bodyPadding: 5,
	title: 'Navigate',
	header: false,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	defaults: {
		xtype: 'splitbutton',
		height: 45,
		margin: '0 0 10 0',
		toggleGroup: 'perspectives',
		allowDepress: false
	},
	items: [{
		text: 'Administer',
		iconCls: 'btnAdminIcon',
		menu: {
			xtype: 'menu',
			width: 182,
			items: [{
				text: 'Allergies',
				iconCls: 'nose'
			}, {
				text: 'Pre-Existing Conditions',
				iconCls: 'bottleOfPills'
			}, {
				text: 'Billing Codes/Procedures',
				iconCls: 'medicalBag'
			}]
		}
	}, {

		text: 'Patients',
		iconCls: 'btnPatientsIcon',
		menu: {
			width: 150,
			items: [{
				text: 'Search',
				iconCls: 'patientFind',
				listeners: {
					click: 'onPatientSearch'
				}
			}, {
				iconCls: 'patientAdd',
				text: 'Add New'
			}]
		}

	}, {

		text: 'Research',
		iconCls: 'btnResearchIcon',
		menu: {
			width: 150,
			items: [{
				text: 'Clinical Trials',
				iconCls: 'injection'
			}, {
				text: 'Hospital Stats',
				iconCls: 'hospital'
			}]
		}
	}, {
		xtype: 'button',
		text: 'About',
		iconCls: 'btnAbout',
		handler: function() {
			Ext.widget('about');
		}
	}]

});

/*
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
        reorderable: true
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
        xtype: 'splitbutton',
        itemId: 'btnAdminPerspective',
        iconCls: 'btnAdminIcon',
        text: 'Administer',
        menu: {
            xtype: 'menu',
            width: 182,
            items: [{
                xtype: 'menuitem',
                width: 138,
                text: 'Allergies',
                iconCls: 'nose',
                listeners: {
                    click: 'onAllergiesClick'
                }
            }, {
                xtype: 'menuitem',
                text: 'Pre-Existing Conditions',
                iconCls: 'bottleOfPills',
                listeners: {
                    click: 'onPreExistingConditionsClick'
                }
            }, {
                xtype: 'menuitem',
                text: 'Billing Codes/Procedures',
                iconCls: 'medicalBag',
                listeners: {
                    click: 'onBillingCodesClick'
                }
            }]
        },
        listeners: {
            click: 'onAdministrationClick',
            arrowclick: 'onAdminArrowClick'
        }
    }, {
        xtype: 'splitbutton',
        itemId: 'btnPatientchartPerspective',
        iconCls: 'btnPatientsIcon',
        text: 'Patients',
        menu: {
            xtype: 'menu',
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
            click: 'onPatientPerspectiveClick'
        }
    }, {
        xtype: 'splitbutton',
        itemId: 'btnResearchPerspective',
        iconCls: 'btnResearchIcon',
        text: 'Research',
        menu: {
            xtype: 'menu',
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
        handler: function() {
            Ext.widget('about');
        }
    }]

});
*/