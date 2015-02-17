
Ext.define("PatientChart.view.research.clinicaltrials.ClinicalTrials",{
    extend: "Ext.window.Window",
    alias: 'widget.clinicaltrials',
    requires: [
     "PatientChart.view.research.clinicaltrials.ClinicalTrialsModel",
     "PatientChart.view.research.clinicaltrials.ClinicalTrialsController"
    ],
    width: 700,
    height:500,
    title: 'Clinical Trials',
    autoShow: true,
    constrain: true,

    controller: "research-clinicaltrials-clinicaltrials",
    viewModel: {
        type: "research-clinicaltrials-clinicaltrials"
    },

    html: "Hello, World!!"
});
