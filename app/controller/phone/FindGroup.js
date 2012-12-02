Ext.define('VoteIt.controller.phone.FindGroup', {
    extend: 'VoteIt.controller.FindGroup',

    config: {
        control: {
        	// The commands fired by main list container
            findGroupView: {
                backCommand: "onBack",
                activateFindGroupCommand: "onActivateFindGroup",
                activateGroupCommand: "onActivateGroup"
            }
        }
    },

    onBack: function() {
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateFindGroup: function() {
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getFindGroupView(), VoteIt.app.slideRightTransition);
    },
    onActivateGroup: function (form, record) {
        this.callParent([Ext.Viewport, record]);
    }
});