Ext.define("VoteIt.view.MyQuestionsView", {
    extend: "Ext.Panel",
    xtype: "myquestionsview",
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
                title: 'Questions Voted'
            },{
            	xtype: 'spacer'
/*
            },{
                xtype: "button",
                ui: "action",
                iconCls: "add",
                iconMask: true,
                itemId: "addButton"
*/
            }]
        },{
            xtype: "list",
            itemId: "myQuestionsList",
            store: "QuestionsAnswered",
            loadingText: "Loading Questions...",
            emptyText: '<div class="list-empty-text">No items found.</div>',
            itemTpl:[
                '<div class="list-item-title">{question_text}</div>',
                '<div class="list-item-value">{[new Date(values.created).toLocaleDateString()]}</div>',
                '<div class="list-item-narrative">  </div>'
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
            delegate: "#myQuestionsList",
            event: "itemtap",
            fn: "onMyQuestionDisclose"
        }]
    },
    onBackButtonTap: function () {
        this.fireEvent("backCommand", this);
    },
    onAddButtonTap: function () {
        this.fireEvent("activateNewQuestionCommand", this);
    },
    onMyQuestionDisclose: function (list, index, target, record, evt, options) {
        this.fireEvent("activateQuestionCommand", this, record);
    },
});
