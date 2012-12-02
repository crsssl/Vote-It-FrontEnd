Ext.define("VoteIt.controller.NewQuestion", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
        	// We're going to lookup our views by xtype
            mainView: "mainview",
            detailView: "detailview",
            myQuestionsView: "myquestionsview",
            questionsView: "questionsview",
            newQuestionView: "newquestionview",

            title: "#title",
            text: "#text",
            description: "#description",
        },
        control: {
        	// The commands fired by 
            newQuestionView: {
            	initializeCommand: "onInitialize",
                backCommand: "onBack",
                okCommand: "onOk"
            }
        }
    },

    // Commands
    
	onInitialize: function (forGroupRecord) {
        var now = new Date();
        var questionId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
        var newQuestion = Ext.create("VoteIt.model.Question", {
            question_id: questionId,
            group: forGroupRecord.data.group_id,
            created: now,
            question_text: "",
            conversation: "",
            show_tally: false,
            answer1: "Yes",
            answer2: "No",
            answer3: "",
            tally1: 0,
            tally2: 0,
            tally3: 0,
            text: ""
        });
        this.getNewQuestionView().setRecord(newQuestion);
	},
    onBack: function () {
        this.getQuestionsView().fireEvent("showQuestionsCommand", this);
    },
    onOk: function (form) {

        var record = form.getRecord();
        var vals = form.getValues();
        record.set(vals);

        // Do some basic checking of data to keep input realistic
        var basicErrors = false;
        var errorMessage = '';

        // Error checking
        if (Ext.String.trim(record.data.question_text) == '') {
                errorMessage += 'Question text is required<br/>';
                basicErrors = true;
        }

        // OK, report any errors
        if (basicErrors) {
            Ext.Msg.alert('Invalid Input', errorMessage);
            record.reject();
            return;
        }

        // Finally, make sure "convert" fields fire

        // Set and validate the data
        var errors =  record.validate();
        if (!errors.isValid()) {           // Oops, uncaught problems reported by the model
            var errorMessage = '';
            errors.each(function (err) {
                errorMessage += err.getMessage() + '<br/>';
            });
            Ext.Msg.alert('Invalid Input', errorMessage);
            record.reject();
            return;
        }

        var questionsStore = Ext.getStore("Questions");
        questionsStore.add(record);

        // Finally store the data and get us outta here
        questionsStore.sync();
        questionsStore.sort([{ property: 'created', direction: 'DESC'}]);
        this.getQuestionsView().fireEvent("showQuestionsCommand", this);
    },

    // Helpers

    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

/*
    launch: function () {
        this.callParent(arguments);
    },
    init: function () {
        this.callParent();
    }
*/
});
