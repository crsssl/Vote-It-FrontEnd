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
        console.log('onBack');
        this.getMainView().fireEvent("activateMainViewCommand", this);
    },

    onActivateMyQuestions: function() {
        console.log('onActivateMyQuestions');
        this.getMyQuestionsList().deselectAll();
    },

    onActivateNewQuestion: function (container) {
        console.log('onActivateNewQuestion');
        var ed = this.getNewQuestionView();
        ed.fireEvent("initializeCommand", this);
        container.animateActiveItem(ed, VoteIt.app.slideLeftTransition);
    },
    onActivateQuestion: function (container, record) {
        console.log('onActivateQuestion')
        console.log(record);
        var ed = this.getQuestionView();
        ed.fireEvent("initializeCommand", record);
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
