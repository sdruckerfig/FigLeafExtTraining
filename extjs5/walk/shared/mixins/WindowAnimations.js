Ext.define('Ext.ux.mixins.WindowAnimations', {
    extend: 'Ext.Mixin',
    
    closeAnimation: 'fade',
    
    mixinConfig: {
        before: {
            close: 'onBeforeClose'
        }
    },
    
    onBeforeClose: function() {
        if (this.closeAnimation == 'fade') {
            this.el.animate({
                opacity: 0,
                callback: function() {
                    this.fireEvent('close', this);
                    this[this.closeAction]();
                },
                scope: this
            });
        } else {
            this.el.switchOff({
                callback: function() {
                    this.fireEvent('close', this);
                    this[this.closeAction]();
                },
                scope: this
            });
        }
        return false; // prevent default action
    }
});