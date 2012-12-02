Ext.define('VoteIt.controller.phone.MyGroups', {
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
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateMyGroups: function() {
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getMyGroupsView(), VoteIt.app.slideRightTransition);
    },

    onActivateNewGroup: function () {
        this.callParent([Ext.Viewport]);
    },
    onActivateGroup: function (form, record) {
        this.callParent([Ext.Viewport, record]);
    }
});