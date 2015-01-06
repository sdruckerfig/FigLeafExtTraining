Ext.define('PatientChart.view.patientchart.procedures.ProceduresViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientprocedures',

    onAddRecord: function(grid, tool, e) {

        var gridStore = grid.getStore();

        var rec = Ext.create('PatientChart.model.PatientVisit', {
            date: new Date(),
            patientId: this.getViewModel().get('patient').get('id')
        });

        var rowEditor = grid.editingPlugin;
        rowEditor.cancelEdit();
        gridStore.insert(0, rec);
        rowEditor.startEdit(rec, 1);

    },

    onBillingCodeSelectFromGrid: function(combo, record, eOpts) {
        var rec = this.getViewModel().get('selectedProcedure');
        rec.set('procedureText', record.get('code') + ' - ' + record.get('text'));
        rec.set('description', record.get('description'));
        rec.set('fee', record.get('fee'));
    },

    onPatientRecordSelect: function(grid, rec, index, eOpts) {
        var s = Ext.getStore('BillingCodes');
        var loc = s.find('id',rec.get('procedureId'));
        if (loc == -1) {
            var m = Ext.create('PatientChart.model.BillingCode', {
                id: rec.get('procedureId'),
                code: rec.get('code'),
                text: rec.get('procedureText')
            });
            s.add(m);
        }
    },

    onRowEditingEdit: function(editor, context, eOpts) {
        var rec = context.record;

        rec.save({
            success: function(record, operation) {
                if (operation.action == 'create') {
                    var pk = Ext.decode(operation.getResponse().responseText).id;
                    record.set('id', pk);
                    record.set('updatedate', new Date());
                }
                record.commit();
            },
            failure: function(record, operation) {
                Ext.Msg.alert('Operation failed', "Please try again later.");
                console.log(arguments);
            }
        });
    },

    onRowEditingCanceledit: function(editor, context, eOpts) {
        var rec = context.record;
        if (rec.phantom) {
            context.grid.getStore().remove(rec);
        }
    },

    onRefreshClick: function(grid, tool) {
        var gridStore = grid.getStore();
        var rowEditor = grid.editingPlugin;
        rowEditor.cancelEdit();
        gridStore.load();
    }

});