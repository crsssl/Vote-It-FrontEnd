Ext.define("VoteIt.view.FindGroupView", {
    extend: "Ext.Panel",
    xtype: "findgroupview",
    requires: [
        'Ext.dataview.List',
        'Ext.field.Select'
    ],

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            docked: "top",
            items: [{
                xtype: "button",
                ui: "plain",
                iconCls: "arrow_left",
                iconMask: true,
                itemId: "backButton"
            },{
                xtype: 'title',
                title: 'Groups'
            },{
            	xtype: 'spacer'
            }]
        },{
            xtype: "list",
            itemId: "findGroupList",
            store: "Groups",
            loadingText: "Loading Main...",
            emptyText: '<div class="list-empty-text">No items found.</div>',
            itemTpl:[
                '<div class="list-item-title">{title}</div><br>',
                '<div class="list-item-value">{[new Date(values.created).toLocaleDateString()]}</div>'
            ],
            fields: ['id', 'title', 'created' ]
        }],
        listeners: [{
            delegate: "#backButton",
            event: "tap",
            fn: "onBackButtonTap"
        },{
            delegate: "#findGroupList",
            event: "itemtap",
            fn: "onMyGroupsDisclose"
        }]
    },
    onBackButtonTap: function () {
        console.log('onBackButtonTap');
        this.fireEvent("backCommand", this);
    },
    onMyGroupsDisclose: function (list, index, target, record, evt, options) {
        console.log('onMyGroupsDisclose');
        console.log(record);
        this.fireEvent("activateGroupCommand", this, record);
    },
});
