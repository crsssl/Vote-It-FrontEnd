Ext.define('VoteIt.controller.tablet.MyQuestions', {
    extend: 'VoteIt.controller.MyQuestions',

    config: {
        control: {
            // The commands fired by main list container
            myQuestionsView: {
//                backCommand: "onBack",
                activateMyQuestionsCommand: "onActivateMyQuestions",
                showMyQuestionsCommand: "onShowMyQuestions",
                activateNewQuestionCommand: "onActivateNewQuestion",
                activateQuestionCommand: "onActivateQuestion"
            },
        }
    },

    onBack: function() {
        this.callParent();
        this.getDetailView().animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateMyQuestions: function() {
        this.callParent();
        this.getDetailView().animateActiveItem(this.getMyQuestionsView(), VoteIt.app.slideRightTransition);
    },
    onShowMyQuestions: function() {
        this.callParent([this.getDetailView()]);
    },
    onActivateNewQuestion: function () {
        this.callParent([this.getDetailView()]);
    },
    onActivateQuestion: function (form, record) {
        this.callParent([this.getDetailView(), record]);
    }
});