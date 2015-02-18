Ext.define('PatientChart.view.admin.users.Users', {
	extend: 'Ext.window.Window',
	alias: 'widget.editusers',
	requires: [
		'PatientChart.view.admin.users.UsersModel',
		'PatientChart.view.admin.users.UsersController',
		'Ext.tree.plugin.TreeViewDragDrop',
		'Ext.grid.plugin.CellEditing'
	],
	controller: 'admin-users-users',
	viewModel: {
		type: 'admin-users-users'
	},
	width: 250,
	height: 500,
	title: 'Edit Users',
	layout: 'fit',
	autoShow: true,
	constrain: true,
	tools: [{
		type: 'save',
		tooltip: 'Commit Changes',
		handler: 'onSave'
	}],
	items: [{
		xtype: 'treepanel',
		bind: {
			selection: '{selectedNode}',
			store: '{Users}'
		},
		viewConfig: {
			plugins: [{
				ptype: 'treeviewdragdrop',
				appendOnly: true,
				nodeHighlightOnDrop: true,
				nodeHighlightOnRepair: true
			}]
			/*,
			listeners: {
				'beforedrop': 'onBeforeDrop'
			}
			*/
		},
		plugins: [{
			ptype: 'cellediting',
			clicksToEdit: 2
		}],
		columns: [{
			xtype: 'treecolumn',
			dataIndex: 'text',
			text: 'Departments/Users',
			flex: 1,
			editor: {
				xtype: 'textfield',
				allowBlank: false,
				allowOnlyWhitespace: false,
				maxLength: 100
			}
		}],
		
		listeners: {
			'edit': 'onNodeEdit'
		},
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'bottom',
			defaults: {
				flex: 1
			},
			items: [{
				text: 'Add',
				handler: 'onAddNode',
				bind: {
					disabled: '{!selectedNode}'
				}
			}, {
				text: 'Delete',
				handler: 'onDeleteNode',
				bind: {
					disabled: '{!selectedNode}'
				}

			}]
		}]
	}]
});