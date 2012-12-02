Ext.define('VoteIt.controller.tablet.MyGroups', {
    extend: 'VoteIt.controller.MyGroups',

    config: {
        control: {
        	// The commands fired by main list container
            myGroupsView: {
                backCommand: "onBack",
                activateMyGroupsCommand: "onActivateMyGroups",
            	activateNewGroupCommand: "onActivateNewGroup",
                activateGroupCommand: "onActivateGroup"
            }
        }
    },

    onBack: function() {
        console.log('onBack');
        this.callParent();
        this.getDetailView().animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateMyGroups: function() {
        console.log('onActivateMyGroups');
        this.callParent();
        this.getDetailView().animateActiveItem(this.getMyGroupsView(), VoteIt.app.slideRightTransition);
    },

    onActivateNewGroup: function () {
        console.log('onActivateNewGroup');
        this.callParent([this.getDetailView()]);
    },
    onActivateGroup: function (form, record) {
        console.log('onActivateGroup');
        console.log(record);
        this.callParent([this.getDetailView(), record]);
    }
});