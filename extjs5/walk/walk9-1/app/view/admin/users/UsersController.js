Ext.define('PatientChart.view.admin.users.UsersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-users-users',

    onNodeEdit: function(editor, context, eOpts) {

        var rec = context.record;

        rec.parentNode.sort(function(n1, n2) {
            n1 = n1.get('text');
            n2 = n2.get('text');
            if (n1 < n2) {
                return -1;
            } else if (n1 === n2) {
                return 0;
            }
            return 1;
        });

    },

    onSave: function(b, e) {
        /*
		var rootNode = this.getView().down('treepanel').getRootNode();
		rootNode.cascadeBy({
			before: function(node) {
				// called before cascading to child nodes
				// return false to stop cascade
			},
			after: function(node) {
				// called after cascading into child nodes
				// return false to stop cascade
			},
			scope: this
		})
        */
        var rootNode = this.getView().down('treepanel').getRootNode();

        console.log(rootNode.serialize());
    },

    onDeleteNode: function(b, e) {
        var selectedNode = this.getViewModel().get('selectedNode');
        selectedNode.erase();
    },

    onAddNode: function(b, e) {

        var selectedNode = this.getViewModel().get('selectedNode');
        var treePanel = this.getView().down('treepanel');

        if (selectedNode.$className == 'PatientChart.model.user.User') {
            selectedNode = selectedNode.parentNode;
        }

        if (selectedNode.id == 'root') {
            var n = Ext.create('PatientChart.model.user.Department', {
                leaf: true
            });
        } else {
            var n = Ext.create('PatientChart.model.user.User', {
                leaf: true
            });
        }
        selectedNode.insertChild(0, n);
        selectedNode.expand();
    }

});