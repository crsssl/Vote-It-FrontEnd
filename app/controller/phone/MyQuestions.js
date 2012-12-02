Ext.define('VoteIt.controller.phone.MyQuestions', {
    extend: 'VoteIt.controller.MyQuestions',

    config: {
        control: {
        	// The commands fired by main list container
            myQuestionsView: {
                backCommand: "onBack",
                activateMyQuestionsCommand: "onActivateMyQuestions",
                showMyQuestionsCommand: "onShowMyQuestions",
            	activateNewQuestionCommand: "onActivateNewQuestion",
                activateQuestionCommand: "onActivateQuestion"
            },
        }
    },

    onBack: function() {
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateMyQuestions: function() {
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getMyQuestionsView(), VoteIt.app.slideRightTransition);
    },
    onShowMyQuestions: function() {
        this.callParent([Ext.Viewport]);
    },
    onActivateNewQuestion: function () {
        this.callParent([Ext.Viewport]);
    },
    onActivateQuestion: function (form, record) {
        this.callParent([Ext.Viewport, record]);
    }
});