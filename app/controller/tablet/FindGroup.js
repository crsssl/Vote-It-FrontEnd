Ext.define('VoteIt.controller.tablet.FindGroup', {
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
        this.getDetailView().animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateFindGroup: function() {
        console.log('onActivateFindGroup');
        this.callParent();
        this.getDetailView().animateActiveItem(this.getFindGroupView(), VoteIt.app.slideRightTransition);
    },
    onActivateGroup: function (form, record) {
        console.log('onActivateGroup');
        console.log(record);
        this.callParent([this.getDetailView(), record]);
    }
});