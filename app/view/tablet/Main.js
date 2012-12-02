Ext.define('VoteIt.view.tablet.Main', {
    extend: 'VoteIt.view.Main',
    fullscreen: true,

    config: {
        title: 'Tablet-specific version',
        layout: 'hbox',
        items: [{
        	xtype: 'mainview',
            width: 200
        },{
       	    xtype: 'detailview',
            style: { 'border-left': "1px solid" },
            flex: 1
        }]
    }
});