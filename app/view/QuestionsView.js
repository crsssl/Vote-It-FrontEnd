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
                itemId: "addButton"
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
            delegate: "#addButton",
            event: "tap",
            fn: "onAddButtonTap"
        },{
            delegate: "#questionsList",
            event: "itemtap",
            fn: "onQuestionDisclose"
        }]
    },
    onBackButtonTap: function () {
        console.log('onBackButtonTap');
        this.fireEvent("backCommand", this);
    },
    onAddButtonTap: function () {
        console.log('onAddButtonTap');
        this.fireEvent("activateNewQuestionCommand", this);
    },
    onQuestionDisclose: function (list, index, target, record, evt, options) {
        console.log('onQuestionsDisclose');
        console.log(record);
        this.fireEvent("activateQuestionCommand", this, record);
    },
});
