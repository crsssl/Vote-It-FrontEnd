Ext.define('VoteIt.controller.tablet.Questions', {
    extend: 'VoteIt.controller.Questions',

    config: {
        control: {
            // The commands fired by main list container
            questionsView: {
                backCommand: "onBack",
                activateQuestionsCommand: "onActivateQuestions",
                showQuestionsCommand: "onShowQuestions",
                activateNewQuestionCommand: "onActivateNewQuestion",
                activateQuestionCommand: "onActivateQuestion"
            }
        }
    },

    onBack: function() {
        console.log('onBack');
        this.callParent();
        this.getDetailView().animateActiveItem(this.getGroupView(), VoteIt.app.slideRightTransition);
    },

    onActivateQuestions: function(form, record) {
        console.log('onActivateQuestions');
        this.callParent([this.getDetailView(), record]);
    },
    onShowQuestions: function() {
        console.log('onShowQuestions');
        this.callParent([this.getDetailView()]);
    },
    onActivateNewQuestion: function (form, record) {
        console.log('onActivateNewQuestion');
        this.callParent([this.getDetailView(), record]);
    },
    onActivateQuestion: function (form, record) {
        console.log('onActivateQuestion');
        console.log(record);
        this.callParent([this.getDetailView(), record]);
    }
});