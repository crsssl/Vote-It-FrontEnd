Ext.define('VoteIt.controller.tablet.MyQuestions', {
    extend: 'VoteIt.controller.MyQuestions',

    config: {
        control: {
            // The commands fired by main list container
            myQuestionsView: {
                backCommand: "onBack",
                activateMyQuestionsCommand: "onActivateMyQuestions",
                activateNewQuestionCommand: "onActivateNewQuestion",
                activateQuestionCommand: "onActivateQuestion"
            },
        }
    },

    onBack: function() {
        console.log('onBack');
        this.callParent();
        this.getDetailView().animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateMyQuestions: function() {
        console.log('onActivateMyQuestions');
        this.callParent();
        this.getDetailView().animateActiveItem(this.getMyQuestionsView(), VoteIt.app.slideRightTransition);
    },

    onActivateNewQuestion: function () {
        console.log('onActivateNewQuestion');
        this.callParent([this.getDetailView()]);
    },
    onActivateQuestion: function (form, record) {
        console.log('onActivateQuestion');
        console.log(record);
        this.callParent([this.getDetailView(), record]);
    }
});