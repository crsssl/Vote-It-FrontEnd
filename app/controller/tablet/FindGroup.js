Ext.define('VoteIt.controller.tablet.FindGroup', {
    extend: 'VoteIt.controller.FindGroup',

    config: {
        control: {
        	// The commands fired by main list container
            findGroupView: {
//                backCommand: "onBack",
                activateFindGroupCommand: "onActivateFindGroup",
                activateGroupCommand: "onActivateGroup"
            }
        }
    },

    onBack: function() {
        this.callParent();
        this.getDetailView().animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateFindGroup: function() {
        this.callParent();
        this.getDetailView().animateActiveItem(this.getFindGroupView(), VoteIt.app.slideRightTransition);
    },
    onActivateGroup: function (form, record) {
        this.callParent([this.getDetailView(), record]);
    }
});