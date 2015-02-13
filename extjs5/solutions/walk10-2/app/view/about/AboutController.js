Ext.define('PatientChart.view.about.AboutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.about-about',

    onAfterRender: function(cmp) {
			cmp.setHtml(Ext.get('aboutDoctorExt').dom.outerHTML);
	}

    
});
