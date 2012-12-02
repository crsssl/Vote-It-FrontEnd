Ext.define('VoteIt.controller.phone.MainView', {
    extend: 'VoteIt.controller.MainView',

    config: {
        control: {
        	// The commands fired by main list container
            mainView: {
            	activateMainViewCommand: "onActivateMainView",
                activateMyGroupsCommand: "onActivateMyGroups",
                activateMyQuestionsCommand: "onActivateMyQuestions",
                activateFindGroupsCommand: "onActivateFindGroup",
                activateNewsCommand: "onActivateNews"
            }
        }
    },

    onActivateMainView: function() {
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateMyGroups: function () {
        this.callParent([Ext.Viewport]);
    },
    onActivateMyQuestions: function () {
        this.callParent([Ext.Viewport]);
    },
    onActivateFindGroup: function () {
        this.callParent([Ext.Viewport]);
    },
    onActivateNews: function () {
        this.callParent([Ext.Viewport]);
    }
});