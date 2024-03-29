Ext.define("VoteIt.controller.FindGroup", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
        	// We're going to lookup our views by xtype
            mainView: "mainview",
            detailView: "detailview",
            findGroupView: "findgroupview",
            GroupView: "groupview",

            findGroupList: "#findGroupList",
 			mainDash: "#mainDash",
         	noDetailPage: "#noDetailPage"
        }
    },

    // Commands

    onBack: function() {
        this.getMainView().fireEvent("activateMainViewCommand", this);
    },

    onActivateFindGroup: function() {
        this.getFindGroupList().deselectAll();
    },
    onActivateGroup: function (container, record) {
        var ed = this.getGroupView();
        ed.fireEvent("initializeCommand", record, this.getFindGroupView(), "activateFindGroupCommand");
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
