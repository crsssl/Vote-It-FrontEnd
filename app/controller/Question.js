Ext.define("VoteIt.controller.Question", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
        	// We're going to lookup our views by xtype
            mainView: "mainview",
            detailView: "detailview",
            myQuestionsView: "myQuestionsview",
            questionView: "questionview",
            questionsView: "questionsview",
            voteView: "voteview",

            fieldset1: "#fieldset1",
            fieldset2: "#fieldset2",
            fieldset3: "#fieldset3",
            fieldsetTally1: "#fieldsetTally1",
            fieldsetTally2: "#fieldsetTally2",
            fieldsetTally3: "#fieldsetTally3",
            tallyText1: "#tallyText1",
            tallyText2: "#tallyText2",
            tallyText3: "#tallyText3",
            voteButton: '#voteButton',
            alreadyVotedButton: '#alreadyVotedButton'
        },
        control: {
        	// The commands fired by 
            questionView: {
            	initializeCommand: "onInitialize",
                backCommand: "onBack",
                voteCommand: "onVote"
            }
        }
    },

    // Commands
    
	onInitialize: function (record, returnView, returnCommand) {
        this.getQuestionView().setRecord(record);
        this.getQuestionView().returnView = returnView;
        this.getQuestionView().returnCommand = returnCommand;
        this.displaySetup();
	},
    displaySetup: function() {
        var record = this.getQuestionView().getRecord();
        console.log(record);

        var questionsAnsweredStore = Ext.getStore("QuestionsAnswered");
        var groupRecord = questionsAnsweredStore.findRecord('question_id', record.data.question_id);  // You can get a record with a given id.
        console.log(groupRecord);
        if (! groupRecord) {
            this.getVoteButton().setHidden(false);
            this.getAlreadyVotedButton().setHidden(true);
            this.getFieldset1().setHidden(false);
            this.getFieldset2().setHidden(false);
            this.getFieldset3().setHidden(false);
            this.getFieldsetTally1().setHidden(true);
            this.getFieldsetTally2().setHidden(true);
            this.getFieldsetTally3().setHidden(true);
        } else {
            this.getVoteButton().setHidden(true);
            this.getAlreadyVotedButton().setHidden(false);

            if (record.data.show_tally) {
                this.getFieldset1().setHidden(true);
                this.getFieldset2().setHidden(true);
                this.getFieldset3().setHidden(true);
                this.getFieldsetTally1().setHidden(false);
                this.getFieldsetTally2().setHidden(false);
                this.getFieldsetTally3().setHidden(false);

                this.getTallyText1().setValue('Tally: ' + record.data.tally1 + ' - ' + record.data.answer1);
                this.getTallyText2().setValue('Tally: ' + record.data.tally2 + ' - ' + record.data.answer2);
                this.getTallyText3().setValue('Tally: ' + record.data.tally3 + ' - ' + record.data.answer3);
            } else {
                this.getFieldset1().setHidden(false);
                this.getFieldset2().setHidden(false);
                this.getFieldset3().setHidden(false);
                this.getFieldsetTally1().setHidden(true);
                this.getFieldsetTally2().setHidden(true);
                this.getFieldsetTally3().setHidden(true);
            }
        }

        if (!record.data.answer3 || Ext.String.trim(record.data.answer3) == '') {
            this.getFieldset3().setHidden(true);
            this.getFieldsetTally3().setHidden(true);
        }

    },
    onBack: function () {
        this.getQuestionView().returnView.fireEvent(this.getQuestionView().returnCommand, this);
    },
    onVote: function () {
        var record = this.getQuestionView().getRecord();

        var popup = new VoteIt.view.VoteView;
        popup.setRecord(record);
        popup.questionRecord = record;

        // Keep width of help pop-up to 500px maximum (and still keep min 10px margin)
        var devWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (devWidth > 500 + 10 + 10) {
            var popLeftRight = Math.round((devWidth - 500) / 2);
            popup.setLeft(popLeftRight);
            popup.setRight(popLeftRight);
        }
        var devHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        if (devHeight > 400 + 10 + 10) {
            var popTopBottom = Math.round((devHeight - 400) / 2);
            popup.setTop(popTopBottom);
            popup.setBottom(popTopBottom);
        }
        popup.query('#button1')[0].setText(record.data.answer1);
        popup.query('#button2')[0].setText(record.data.answer2);
        if (!record.data.answer3 || Ext.String.trim(record.data.answer3) == '') {
            popup.query('#button3')[0].setHidden(true);
        } else {
            popup.query('#button3')[0].setText(record.data.answer3);
        }

        // Show it...
        Ext.Viewport.add(popup);
        popup.show(VoteIt.app.popInTransition);
    },

    // Helpers

/*
    launch: function () {
        this.callParent(arguments);
    },
    init: function () {
        this.callParent();
    }
*/
});
