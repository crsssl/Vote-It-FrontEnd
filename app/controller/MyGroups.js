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
        console.log('onBack');
        this.getMainView().fireEvent("activateMainViewCommand", this);
    },

    onActivateMyGroups: function() {
        console.log('onActivateMyGroups');
        this.getMyGroupsList().deselectAll();
    },

    onActivateNewGroup: function (container) {
        console.log('onActivateNewGroup');
        console.log(this.getMyGroupsView());
        var ed = this.getNewGroupView();
        ed.fireEvent("initializeCommand", this);
        container.animateActiveItem(ed, VoteIt.app.slideLeftTransition);
    },
    onActivateGroup: function (container, record) {
        console.log('onActivateGroup')
        console.log(record);
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
