Ext.define("VoteIt.controller.MyGroups", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
        	// We're going to lookup our views by xtype
            mainView: "mainview",
            detailView: "detailview",
            myGroupsView: "mygroupsview",
            newGroupView: "newgroupview",
            groupView: "groupview",

            myGroupsList: "#myGroupsList",
 			mainDash: "#mainDash",
         	noDetailPage: "#noDetailPage"
        }
    },

    // Commands

    onBack: function() {
        this.getMainView().fireEvent("activateMainViewCommand", this);
    },

    onActivateMyGroups: function() {
        this.getMyGroupsList().deselectAll();
    },

    onActivateNewGroup: function (container) {
        var ed = this.getNewGroupView();
        ed.fireEvent("initializeCommand", this);
        container.animateActiveItem(ed, VoteIt.app.slideLeftTransition);
    },
    onActivateGroup: function (container, record) {
        var ed = this.getGroupView();
        ed.fireEvent("initializeCommand", record, this.getMyGroupsView(), "activateMyGroupsCommand");
        container.animateActiveItem(ed, VoteIt.app.slideLeftTransition);
    },

    // Main List Functions

    // Helpers
/*  Note: activateMainListCommand:function() controlled by Device Profile */
/*
    launch: function () {
        this.callParent(arguments);
    },

    init: function () {
        this.callParent();
    },
*/
});
