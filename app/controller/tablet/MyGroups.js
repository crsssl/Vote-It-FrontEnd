Ext.define('VoteIt.controller.tablet.MyGroups', {
    extend: 'VoteIt.controller.MyGroups',

    config: {
        control: {
        	// The commands fired by main list container
            myGroupsView: {
//                backCommand: "onBack",
                activateMyGroupsCommand: "onActivateMyGroups",
            	activateNewGroupCommand: "onActivateNewGroup",
                activateGroupCommand: "onActivateGroup"
            }
        }
    },

    onBack: function() {
        this.callParent();
        this.getDetailView().animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateMyGroups: function() {
        this.callParent();
        this.getDetailView().animateActiveItem(this.getMyGroupsView(), VoteIt.app.slideRightTransition);
    },

    onActivateNewGroup: function () {
        this.callParent([this.getDetailView()]);
    },
    onActivateGroup: function (form, record) {
        this.callParent([this.getDetailView(), record]);
    }
});