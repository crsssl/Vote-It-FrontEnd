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
        console.log('onBack');
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateFindGroup: function() {
        console.log('onActivateFindGroup');
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getFindGroupView(), VoteIt.app.slideRightTransition);
    },
    onActivateGroup: function (form, record) {
        console.log('onActivateGroup');
        console.log(record);
        this.callParent([Ext.Viewport, record]);
    }
});