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
        console.log('onBack');
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getGroupView(), VoteIt.app.slideRightTransition);
    },

    onActivateQuestions: function(form, record) {
        console.log('onActivateQuestions');
        this.callParent([Ext.Viewport, record]);
    },
    onShowQuestions: function() {
        console.log('onShowQuestions');
        this.callParent([Ext.Viewport]);
    },
    onActivateNewQuestion: function (form, record) {
        console.log('onActivateNewQuestion');
        this.callParent([Ext.Viewport, record]);
    },
    onActivateQuestion: function (form, record) {
        console.log('onActivateQuestion');
        console.log(record);
        this.callParent([Ext.Viewport, record]);
    }
});