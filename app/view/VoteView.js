Ext.define("VoteIt.view.VoteView", {
    extend: "Ext.form.Panel",
    xtype: "voteview",
    requires: [
        "Ext.TitleBar",
        "Ext.form.FieldSet"
    ],

    config: {
        itemId: "helpview",
        modal: true,
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
        padding: 10,
        margin: 0,
        scrollable: 'vertical',
        styleHtmlContent: true,
        items: [{
            xtype: "toolbar",
            docked: "top",
            items: [{
                xtype: 'title',
                title: 'Vote'
            },{
                xtype: "spacer"
            },{
                xtype: "button",
                ui: "action",
                text: "Cancel",
                itemId: "cancelButton",
                handler: function() {
                    this.parent.parent.hide(VoteIt.app.popOutTransition);
                }
            }]
        },{            
        },{
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
                hidden: true,
                name: 'question_id',
                itemId: 'question_id'
            },{
                xtype: 'textareafield',
                readOnly: true,
                name : 'question_text',
                itemId: 'question_text'
            }]
        },{
            xtype: "button",
            itemId: 'button1',
            minHeight: '50px',
            margin: 10
        },{
            xtype: "button",
            itemId: 'button2',
            minHeight: '50px',
            margin: 10
        },{
            xtype: "button",
            itemId: 'button3',
            minHeight: '50px',
            margin: 10
        }],
        listeners: [{
            delegate: "#cancelButton",
            event: "tap",
            fn: "onCancelButtonTap"
        },{
            delegate: "#button1",
            event: "tap",
            fn: "onVoteButtonTap"
        },{
            delegate: "#button2",
            event: "tap",
            fn: "onVoteButtonTap"
        },{
            delegate: "#button3",
            event: "tap",
            fn: "onVoteButtonTap"
        }],
    },
    onVoteButtonTap: function (btn) {
        console.log(btn.getItemId());
        // Yep, it's not MVC, but it's nice to have this modal window

        console.log(this.getRecord());
        var thisQuestionRecord = this.getRecord();


        // Update Question has been answered
        if (btn.getItemId() == 'button1') {
            var t1 = thisQuestionRecord.data.tally1 + 1;
        } else if (btn.getItemId() == 'button2') {
            var t2 = thisQuestionRecord.data.tally2 + 1;
        } else if (btn.getItemId() == 'button3') {
            var t3 = thisQuestionRecord.data.tally3 + 1;
        }

        // Note that Question has been answered
        var questionsStore = Ext.getStore("Questions");
        var questionsRecord = questionsStore.findRecord('question_id', thisQuestionRecord.data.question_id);
        var questionsAnsweredStore = Ext.getStore("QuestionsAnswered");
        var answeredRecord = Ext.create("VoteIt.model.QuestionAnswered", {});

        questionsRecord.set(thisQuestionRecord.getData());
        answeredRecord.set(thisQuestionRecord.getData());
        if (btn.getItemId() == 'button1') {
            questionsRecord.set('tally1', t1);
            answeredRecord.set('tally1', t1);
        } else if (btn.getItemId() == 'button2') {
            questionsRecord.set('tally2', t2);
            answeredRecord.set('tally2', t2);
        } else if (btn.getItemId() == 'button3') {
            questionsRecord.set('tally3', t3);
            answeredRecord.set('tally3', t3);
        }

        questionsStore.sync();
        questionsAnsweredStore.add(answeredRecord);
        questionsAnsweredStore.sync();

        questionsStore.sort([{ property: 'created', direction: 'DESC'}]);
        questionsAnsweredStore.sort([{ property: 'created', direction: 'DESC'}]);

        this.hide(VoteIt.app.popOutTransition);
    },
});

