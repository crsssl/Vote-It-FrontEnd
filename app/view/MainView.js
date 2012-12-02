Ext.define("VoteIt.view.MainView", {
    extend: "Ext.Panel",
    xtype: "mainview",
    requires: [
        'Ext.dataview.List'
    ],

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            docked: "top",
            items: [{
                xtype: 'title',
                title: 'Vote-It'
            },{
            	xtype: 'spacer'
            }]
        },{
            xtype: "list",
            itemId: "mainDash",
            loadingText: "Loading Main...",
            emptyText: '<div class="list-empty-text">No items found.</div>',
            itemTpl: ['<div class="list-item-title">{title}</div>'],
            fields: ['id', 'command', 'title' ],
            data: [
                { id: "myGroups", command: "activateMyGroupsCommand", title: "My Groups" }, 
                { id: "myQuestions", command: "activateMyQuestionsCommand", title: "My Questions" }, 
                { id: "findGroups", command: "activateFindGroupsCommand", title: "Find Groups" }, 
//                { id: "news", command: "newsCommand", title: "News" } 
            ]
        }],
        listeners: [{
            delegate: "#mainDash",
            event: "itemtap",
            fn: "onMainDashDisclose"
        }]
    },
    onMainDashDisclose: function (list, index, target, record, evt, options) {
        this.fireEvent(record.get('command'), this, record);
    },
});
