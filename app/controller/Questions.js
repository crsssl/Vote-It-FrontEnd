Ext.define("VoteIt.controller.Questions", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
        	// We're going to lookup our views by xtype
            mainView: "mainview",
            detailView: "detailview",
            questionsView: "questionsview",
            newQuestionView: "newquestionview",
            questionView: "questionview",
            groupView: "groupview",

            questionsList: "#questionsList",
 			mainDash: "#mainDash",
         	noDetailPage: "#noDetailPage"
        }
    },

    // Commands

    onBack: function() {
        console.log('onBack');
        this.getGroupView().fireEvent("activateMainViewCommand", this);
    },

    onActivateQuestions: function(container, record) {
        console.log('onActivateQuestions');
        console.log(record);
        var ed = this.getQuestionsView();
        ed.forGroupRecord = record;
        this.getQuestionsList().getStore().filter('group', record.data.group_id)
        this.getQuestionsList().getStore().setRemoteFilter(false);
        this.getQuestionsList().deselectAll();
        container.animateActiveItem(this.getQuestionsView(), VoteIt.app.slideLeftTransition);
    },
    onShowQuestions: function(container) {
        this.getQuestionsList().deselectAll();
        container.animateActiveItem(this.getQuestionsView(), VoteIt.app.slideRightTransition);
    },
    onActivateNewQuestion: function (container, record) {
        console.log('onActivateNewQuestion');
        var ed = this.getNewQuestionView();
        ed.fireEvent("initializeCommand", this.getQuestionsView().forGroupRecord);
        container.animateActiveItem(ed, VoteIt.app.slideLeftTransition);
    },
    onActivateQuestion: function (container, record) {
        console.log('onActivateQuestion')
        console.log(record);
        var ed = this.getQuestionView();
        ed.fireEvent("initializeCommand", record, this.getQuestionsView(), "showQuestionsCommand");
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
