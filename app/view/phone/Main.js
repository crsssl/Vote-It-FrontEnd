Ext.define('VoteIt.view.phone.Main', {
    extend: 'VoteIt.view.Main',
    fullscreen: true,

    config: {
        title: 'Phone-specific version',
        layout: 'card',
        items: [{
        	xtype: 'mainview'
        },{
        	xtype: 'detailview'
        }]
    }

});