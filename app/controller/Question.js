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

            fieldset3: "#fieldset3",
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
        console.log('onInitialize');
        console.log(record);

        if (!record.data.answer3 || Ext.String.trim(record.data.answer3) == '') {
            this.getFieldset3().setHidden(true);
        } else {
            this.getFieldset3().setHidden(false);
        }

        this.getQuestionView().setRecord(record);
        this.getQuestionView().returnView = returnView;
        this.getQuestionView().returnCommand = returnCommand;
	},
    onBack: function () {
        console.log('onBack');
        this.getQuestionView().returnView.fireEvent(this.getQuestionView().returnCommand, this);
    },
    onVote: function () {
        console.log('onVote');

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
        console.log('out');
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
