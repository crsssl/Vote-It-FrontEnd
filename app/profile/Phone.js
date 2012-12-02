Ext.define('VoteIt.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',
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
        return true;
        return Ext.os.is.Phone;
    },

    launch: function() {
        var main = new VoteIt.view.phone.Main();
        Ext.Viewport.add([main]);
    }
});