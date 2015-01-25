
Ext.define("PatientChart.view.main.Main",{
    extend: "Ext.container.Viewport",
    requires: [
        'PatientChart.view.main.Main.MainController',
        'PatientChart.view.main.Main.MainModel',
        'Ext.layout.container.Border'
    ],
    controller: "main-main",
    viewModel: {
        type: "main-main"
    },
    layout: 'border'
});
