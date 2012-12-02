Ext.define('VoteIt.controller.tablet.Questions', {
    extend: 'VoteIt.controller.Questions',

    config: {
        control: {
            // The commands fired by main list container
            questionsView: {
//                backCommand: "onBack",
                activateQuestionsCommand: "onActivateQuestions",
                showQuestionsCommand: "onShowQuestions",
                activateNewQuestionCommand: "onActivateNewQuestion",
                activateQuestionCommand: "onActivateQuestion"
            }
        }
    },

    onBack: function() {
        this.callParent();
        this.getDetailView().animateActiveItem(this.getGroupView(), VoteIt.app.slideRightTransition);
    },

    onActivateQuestions: function(form, record) {
        this.callParent([this.getDetailView(), record]);
    },
    onShowQuestions: function() {
        this.callParent([this.getDetailView()]);
    },
    onActivateNewQuestion: function (form, record) {
        this.callParent([this.getDetailView(), record]);
    },
    onActivateQuestion: function (form, record) {
        this.callParent([this.getDetailView(), record]);
    }
});