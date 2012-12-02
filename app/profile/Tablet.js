Ext.define('VoteIt.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',
        views: ['Main'],
        controllers: [
            'MainView',
            'MyGroups',
            'MyQuestions',
            'FindGroup',
            'Questions'
        ]
    },

    isActive: function() {
        return false;
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },

    launch: function() {
        var main = new VoteIt.view.tablet.Main();
        Ext.Viewport.add([main]);
    }
});