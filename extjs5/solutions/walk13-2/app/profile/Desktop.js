Ext.define('PatientChart.profile.Desktop', {
    extend: 'Ext.app.Profile',
 
    // mainView: 'App.view.desktop.Main',
 
    isActive: function () {
        return Ext.os.is.Desktop;
    }
});