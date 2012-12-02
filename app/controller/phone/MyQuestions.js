Ext.define('VoteIt.controller.phone.MyQuestions', {
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
        Ext.Viewport.animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateMyQuestions: function() {
        console.log('onActivateMyQuestions');
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getMyQuestionsView(), VoteIt.app.slideRightTransition);
    },

    onActivateNewQuestion: function () {
        console.log('onActivateNewQuestion');
        this.callParent([Ext.Viewport]);
    },
    onActivateQuestion: function (form, record) {
        console.log('onActivateQuestion');
        console.log(record);
        this.callParent([Ext.Viewport, record]);
    }
});