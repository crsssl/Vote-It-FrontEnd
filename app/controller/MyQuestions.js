Ext.define("VoteIt.controller.MyQuestions", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
        	// We're going to lookup our views by xtype
            mainView: "mainview",
            detailView: "detailview",
            myQuestionsView: "myquestionsview",
            newQuestionView: "newquestionview",
            questionView: "questionview",

            myQuestionsList: "#myQuestionsList",
 			mainDash: "#mainDash",
         	noDetailPage: "#noDetailPage"
        }
    },

    // Commands

    onBack: function() {
        this.getMainView().fireEvent("activateMainViewCommand", this);
    },

    onActivateMyQuestions: function() {
        this.getMyQuestionsList().deselectAll();
    },
    onShowMyQuestions: function(container) {
        this.getMyQuestionsList().deselectAll();
        container.animateActiveItem(this.getMyQuestionsView(), VoteIt.app.slideRightTransition);
    },
    onActivateNewQuestion: function (container) {
        var ed = this.getNewQuestionView();
        ed.fireEvent("initializeCommand", this);
        container.animateActiveItem(ed, VoteIt.app.slideLeftTransition);
    },
    onActivateQuestion: function (container, record) {
        var ed = this.getQuestionView();
        ed.fireEvent("initializeCommand", record, this.getMyQuestionsView(), "showMyQuestionsCommand");
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
