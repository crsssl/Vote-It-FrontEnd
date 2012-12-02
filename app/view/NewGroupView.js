Ext.define("VoteIt.view.NewGroupView", {
    extend: "Ext.form.Panel",
    xtype: "newgroupview",
    requires: [
        "Ext.TitleBar",
        "Ext.form.FieldSet"
    ],

    config: {
        scrollable: 'vertical',
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
                title: 'Start Group'
            },{
                xtype: "spacer"
            },{
                xtype: "button",
                ui: "action",
                text: "Cancel",
                itemId: "cancelButton"
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
                label: 'Group Title',
                labelAlign: 'top',
                name : 'title',
                itemId: 'title',
                placeHolder: 'title'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textareafield',
                label: 'Description',
                labelAlign: 'top',
                name : 'description',
                itemId: 'description',
                placeHolder: 'descriptive text'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
                label: 'Hashtag',
                name : 'hashtag',
                itemId: 'hashtag',
                placeHolder: 'ID or hashtag'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'selectfield',
                label: 'Privacy',
                name : 'privacy',
                itemId: 'privacy',
                options: [
                    { text: 'Open', value: 'open'},
                    { text: 'Invite Only', value: 'invite'},
                ]
            }]
        },{
            xtype: "panel",
            layout: 'hbox',
            items: [{
                xtype: 'button',
                ui: 'normal',
                text: 'OK',
                itemId: 'okButton',
                width: '150px',
                left: 0,
                flex: 1
            },{
                xtype: 'button',
                ui: 'normal',
                text: 'Old',
                itemId: 'ok2Button',
                width: '150px',
                right: 0,
                flex: 1
            }]
        }],
        listeners: [{
            delegate: "#backButton",
            event: "tap",
            fn: "onBackButtonTap"
        },{
            delegate: "#cancelButton",
            event: "tap",
            fn: "onCancelButtonTap"
        },{
            delegate: "#okButton",
            event: "tap",
            fn: "onOkButtonTap"
        },{
            delegate: "#ok2Button",
            event: "tap",
            fn: "onOk2ButtonTap"
        }],
    },
    onCancelButtonTap: function () {
        this.fireEvent("cancelCommand", this);
    },
    onBackButtonTap: function () {
        this.fireEvent("backCommand", this);
    },
    onOkButtonTap: function () {
        this.fireEvent("okCommand", this);
    },
    onOk2ButtonTap: function () {
        this.fireEvent("ok2Command", this);
    },
});
