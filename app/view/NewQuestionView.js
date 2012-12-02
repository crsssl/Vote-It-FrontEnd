Ext.define("VoteIt.view.NewQuestionView", {
    extend: "Ext.form.Panel",
    xtype: "newquestionview",
    requires: [
        "Ext.TitleBar",
        "Ext.form.FieldSet",
        "Ext.field.Toggle"
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
                title: 'New Question'
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
                xtype: 'textareafield',
                label: 'Question Text',
                labelAlign: 'top',
                name : 'question_text',
                itemId: 'question_text',
                placeHolder: 'the question'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textareafield',
                label: 'Conversation',
                labelAlign: 'top',
                name : 'conversation',
                itemId: 'conversation',
                placeHolder: 'text'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'togglefield',
                label: 'Show Tally?',
                labelWrap: true,
                name : 'show_tally',
                itemId: 'show_tally'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
                label: 'Answer 1',
                labelWrap: true,
                name : 'answer1',
                itemId: 'answer1',
                placeHolder: 'answer text'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
                label: 'Answer 2',
                labelWrap: true,
                name : 'answer2',
                itemId: 'answer2',
                placeHolder: 'answer text'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
                label: 'Answer 3',
                labelWrap: true,
                name : 'answer3',
                itemId: 'answer3',
                placeHolder: 'answer text'
            }]
        },{
            xtype: 'button',
            ui: 'action',
            text: '+ Add More',
            itemId: 'moreButton',
            width: '200px',
            margin: '0 20 30 20'
        },{
            xtype: "panel",
            items: [{
                xtype: 'button',
                ui: 'normal',
                text: 'OK',
                itemId: 'okButton',
                width: '150px',
                centered: true
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
            delegate: "#okButton",
            event: "tap",
            fn: "onOkButtonTap"
        }],
    },
    onBackButtonTap: function () {
        this.fireEvent("backCommand", this);
    },
    onOkButtonTap: function () {
        this.fireEvent("okCommand", this);
    },
});
