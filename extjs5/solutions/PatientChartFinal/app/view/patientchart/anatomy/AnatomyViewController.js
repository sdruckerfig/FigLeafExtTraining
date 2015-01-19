
Ext.define('PatientChart.view.patientchart.anatomy.AnatomyViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientchartanatomy',

    config: {
        currentSpriteCls: ''
    },

    setSpriteCls: function() {
        var vm = this.getView().getViewModel();
        var diagram = vm.get('diagram');
        if (diagram) {

          var selector = this.lookupReference('spriteSelector'),
                         segments = diagram.get('segments');

          var spriteNum = Math.ceil((vm.get('spriteSegment') + 1)/diagram.get('imagesPerClass'));

          var spriteClass =diagram.get('spriteClass') + spriteNum;

          if (spriteClass != this.currentSpriteCls) {
                this.getView().removeBodyCls(this.currentSpriteCls);
                this.getView().addBodyCls(spriteClass);
                this.currentSpriteCls = spriteClass;
           }
        }

        if (diagram != this.dataDiagram) {
            selector.setMaxValue(segments - 1);
            selector.setValue(0);
            this.dataDiagram = diagram;
            this.setSpriteCls();
        }
    },

    initViewModel: function(vm) {


        /*
        vm.bind(
            {
                spriteSegment: '{spriteSegment}',
                diagram: '{diagram}'
            },
            this.setSpriteCls,
            this
        );
        */
    },

    onBodyMouseOver: function(event) {
        console.log(event);

    },

    onBodyMouseDown: function() {
        this.getView().body.on('mousemove', this.onBodyMouseOver, this);
    },

    onBodyMouseUp: function() {
        this.getView().body.un('mousemove',this.onBodyMouseOver,this);
    },

    onDiagramChange: function(field, newValue, oldValue, eOpts) {
        this.setSpriteCls();
    },

    onDiagramComboAfterRender: function(component, eOpts) {

        var s = component.getStore();
        if (s) {
            if (s.getCount() == 0) {
                Ext.defer(this.onDiagramComboAfterRender,200,this,[component,eOpts]);
            } else {
                component.select(s.getAt(0));
                this.setSpriteCls();
            }
        }
    },

    onSliderDrag: function(slider, e, eOpts) {
        this.setSpriteCls();
    },

    onPanelAfterRender: function(component, eOpts) {
        component.body.on('mousedown', this.onBodyMouseDown,this);
        component.body.on('mouseup', this.onBodyMouseUp,this);
        // component.body.on('mouseover', this.onBodyMouseOver, this);
    }

});
