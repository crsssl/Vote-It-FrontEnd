Ext.define("VoteIt.view.QuestionView", {
    extend: "Ext.form.Panel",
    xtype: "questionview",
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
                title: 'Question'
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
                xtype: 'textareafield',
                readOnly: true,
                name : 'question_text',
                itemId: 'question_text'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textareafield',
                label: 'Conversation',
                labelAlign: 'top',
                readOnly: true,
                name : 'conversation',
                itemId: 'conversation'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
                label: 'Answer 1',
                readOnly: true,
                name : 'answer1',
                itemId: 'answer1'
            }]
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
                label: 'Answer 2',
                readOnly: true,
                name : 'answer2',
                itemId: 'answer2',

            }]
        },{
            xtype: "fieldset",
            itemId: 'fieldset3',
            items: [{
                xtype: 'textfield',
                label: 'Answer 3',
                readOnly: true,
                name : 'answer3',
                itemId: 'answer3'
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
                        text: 'Vote',
                        itemId: 'voteButton',
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
            delegate: "#voteButton",
            event: "tap",
            fn: "onVoteButtonTap"
        },{
            delegate: "#flagButton",
            event: "tap",
            fn: "onFlagButtonTap"
        }],
    },
    onBackButtonTap: function () {
        this.fireEvent("backCommand", this);
    },
    onVoteButtonTap: function () {
        this.fireEvent("voteCommand", this);
    },
    onFlagButtonTap: function () {
        this.fireEvent("flagCommand", this);
    },
});
