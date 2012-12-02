Ext.define("VoteIt.view.GroupView", {
    extend: "Ext.form.Panel",
    xtype: "groupview",
    requires: [
        "Ext.TitleBar",
        "Ext.form.FieldSet"
    ],

    config: {
        scrollable: 'vertical',
        layout: { type: 'vbox' },
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
                title: 'Group'
            },{
                xtype: "spacer"
            },{
                xtype: "button",
                ui: "action",
                text: "Cancel",
                itemId: "cancelButton"
            }]
        },{
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
//                label: 'Group Title',
//                labelAlign: 'top',
                readOnly: true,
                name : 'title',
                itemId: 'title'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textareafield',
                label: 'Description',
                labelAlign: 'top',
                readOnly: true,
                name : 'description',
                itemId: 'description'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
                label: 'Hashtag',
                readOnly: true,
                name : 'hashtag',
                itemId: 'hashtag'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'selectfield',
                label: 'Privacy',
                readOnly: true,
                name : 'privacy',
                itemId: 'privacy',
                options: [
                    { text: 'Open', value: 'open'},
                    { text: 'Invite Only', value: 'invite'},
                ]
            }]
/*
            xtype: 'panel',
            itemId: 'dataPanel',
//            flex: 8,
            tpl: [
                '<div><b>{title}</b></div><br><hr>',
                '<div>Hashtag: {hashtag}</div><hr>',
                '<div>Description: {description}</div><hr>',
                '<tpl if="privacy == \'open\'">',
                    '<div>Type: Open</div>',
                '<tpl elseif="privacy == \'invite\'">',
                    '<div>Type: Invite Only</div>',
                '<tpl elseif="privacy == \'invite\'">',
                    '<div>Type: unknown</div>',
                '</tpl>',
                '<br><br>'
            ],
*/
        },{
            xtype: 'panel',
            items: [{
                xtype: 'panel',
                itemId: 'joinedMessage',
                html: "<div style='text-align:center; border: 2px solid lightgray; padding: 5px'>" +
                    "<b>This is Your Group!</b> Answer Some Questions or Ask Your Own</div>",
            },{
                xtype: 'panel',
                items: [{
                    xtype: 'button',
                    ui: 'normal',
                    text: 'Join',
                    itemId: 'joinButton',
                    width: '120px'
                }]
            },{
                xtype: 'panel',
                margin: 10,
                html: " ",
            }]
        },{
            xtype: 'panel',
            height: '50px',
            items: [{
                xtype: 'panel',
                layout: { type: 'hbox' },
                items: [{
                    xtype: 'panel',
                    flex: 1,
                    items: [{
                        xtype: 'button',
                        ui: 'normal',
                        text: 'Questions',
                        itemId: 'questionsButton',
                        width: '120px',
                        left: 0
                    }]
                },{
                    xtype: 'panel',
                    flex: 1,
                    items: [{
                        xtype: 'button',
                        ui: 'normal',
                        text: 'Flag',
                        itemId: 'flagButton',
                        width: '80px',
                        right: 0
                    }]
                }]
            }]
        }],
        listeners: [{
            delegate: "#backButton",
            event: "tap",
            fn: "onBackButtonTap"
        },{
            delegate: "#cancelButton",
            event: "tap",
            fn: "onBackButtonTap"
        },{
            delegate: "#joinButton",
            event: "tap",
            fn: "onJoinButtonTap"
        },{
            delegate: "#questionsButton",
            event: "tap",
            fn: "onQuestionsButtonTap"
        },{
            delegate: "#flagButton",
            event: "tap",
            fn: "onFlagButtonTap"
        }],
    },
    onBackButtonTap: function () {
        this.fireEvent("backCommand", this);
    },
    onJoinButtonTap: function () {
        this.fireEvent("joinCommand", this);
    },
    onQuestionsButtonTap: function () {
        this.fireEvent("questionsCommand", this);
    },
    onFlagButtonTap: function () {
        this.fireEvent("flagCommand", this);
    },
});
