Ext.define("VoteIt.view.MyGroupsView", {
    extend: "Ext.Panel",
    xtype: "mygroupsview",
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
                title: 'My Groups'
            },{
            	xtype: 'spacer'
            },{
                xtype: "button",
                ui: "action",
                text: "Start One",
//                iconCls: "add",
//                iconMask: true,
                itemId: "addButton"
            }]
/*        },{
            xtype: "button",
            ui: "normal",
            itemId: "addButton",
            text: "Start One!",
            width: "150px",
            margin: 10 */
        },{
            xtype: "list",
            itemId: "myGroupsList",
            store: "GroupsJoined",
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
            delegate: "#addButton",
            event: "tap",
            fn: "onAddButtonTap"
        },{
            delegate: "#myGroupsList",
            event: "itemtap",
            fn: "onMyGroupsDisclose"
        }]
    },
    onBackButtonTap: function () {
        this.fireEvent("backCommand", this);
    },
    onAddButtonTap: function () {
        this.fireEvent("activateNewGroupCommand", this);
    },
    onMyGroupsDisclose: function (list, index, target, record, evt, options) {
        this.fireEvent("activateGroupCommand", this, record);
    },
});
