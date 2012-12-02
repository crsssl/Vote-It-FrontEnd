Ext.define("VoteIt.controller.MainView", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
        	// We're going to lookup our views by xtype
            mainView: "mainview",
            detailView: "detailview",
 			mainDash: "#mainDash",
         	noDetailPage: "#noDetailPage",

            myGroupsView: "mygroupsview",
            myQuestionsView: "myquestionsview",
            findGroupView: "findgroupview",
            newsView: "newsview"
        }
    },

    // Commands

    onActivateMainView: function() {
        this.getMainDash().deselectAll();
    },

    onActivateMyGroups: function (container) {
        var ed = this.getMyGroupsView();
        ed.fireEvent("initializeCommand", this);
        container.animateActiveItem(ed, VoteIt.app.slideLeftTransition);
    },
    onActivateMyQuestions: function (container) {
        var ed = this.getMyQuestionsView();
        ed.fireEvent("initializeCommand", this);
        container.animateActiveItem(ed, VoteIt.app.slideLeftTransition);
    },
    onActivateFindGroup: function (container) {
        var ed = this.getFindGroupView();
        ed.fireEvent("initializeCommand", this);
        container.animateActiveItem(ed, VoteIt.app.slideLeftTransition);
    },
    onActivateNews: function (container) {
        var ed = this.getNewsView();
        ed.fireEvent("initializeCommand", this);
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
