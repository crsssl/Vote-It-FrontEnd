Ext.define('VoteIt.controller.phone.Questions', {
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
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getGroupView(), VoteIt.app.slideRightTransition);
    },

    onActivateQuestions: function(form, record) {
        this.callParent([Ext.Viewport, record]);
    },
    onShowQuestions: function() {
        this.callParent([Ext.Viewport]);
    },
    onActivateNewQuestion: function (form, record) {
        this.callParent([Ext.Viewport, record]);
    },
    onActivateQuestion: function (form, record) {
        this.callParent([Ext.Viewport, record]);
    }
});