Ext.define('VoteIt.controller.tablet.MainView', {
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
        this.getDetailView().animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateMyGroups: function () {
        this.callParent([this.getDetailView()]);
    },
    onActivateMyQuestions: function () {
        this.callParent([this.getDetailView()]);
    },
    onActivateFindGroup: function () {
        this.callParent([this.getDetailView()]);
    },
    onActivateNews: function () {
        this.callParent([this.getDetailView()]);
    },
});