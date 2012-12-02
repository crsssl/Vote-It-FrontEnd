Ext.define("VoteIt.view.QuestionsView", {
    extend: "Ext.Panel",
    xtype: "questionsview",
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
                xtype: "button",
                ui: "plain",
                iconCls: "arrow_left",
                iconMask: true,
                itemId: "backButton"
            },{
                xtype: 'title',
                title: 'Questions'
            },{
            	xtype: 'spacer'
            },{
                xtype: "button",
                ui: "action",
//                iconCls: "add",
//                iconMask: true,
                text: "Ask",
                itemId: "askButton"
            }]
        },{
            xtype: "list",
            itemId: "questionsList",
            store: "Questions",
            loadingText: "Loading Questions...",
            emptyText: '<div class="list-empty-text">No items found.</div>',
            itemTpl:[
                '<div class="list-item-title">{question_text}</div><br>',
                '<div class="list-item-value">{[new Date(values.created).toLocaleDateString()]}</div>'
            ],
            fields: ['question_id', 'question_text', 'created' ]
        }],
        listeners: [{
            delegate: "#backButton",
            event: "tap",
            fn: "onBackButtonTap"
        },{
            delegate: "#askButton",
            event: "tap",
            fn: "onAskButtonTap"
        },{
            delegate: "#questionsList",
            event: "itemtap",
            fn: "onQuestionDisclose"
        }]
    },
    onBackButtonTap: function () {
        this.fireEvent("backCommand", this);
    },
    onAskButtonTap: function () {
        this.fireEvent("activateNewQuestionCommand", this);
    },
    onQuestionDisclose: function (list, index, target, record, evt, options) {
        this.fireEvent("activateQuestionCommand", this, record);
    },
});
