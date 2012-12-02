Ext.define("VoteIt.controller.Vote", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            voteView: "voteview",
        },
        control: {
        	// The commands fired by 
            voteView: {
                cancelCommand: "onCancelCommand",
                voteCommand: "onVoteCommand"
            }
        }
    },

    onCancelCommand: function (buttonId) {
        console.log('onCancelCommand');
        console.log(this.getVoteView());
        console.log(this.getVoteView().query('#question_id')[0]);
        console.log(this.getVoteView().query('#question_id')[0]._value);

        this.getVoteView().hide(VoteIt.app.popOutTransition);
    },
    onVoteCommand: function (buttonId) {
        console.log('onVoteCommand');


        var questionsAnsweredStore = Ext.getStore("QuestionAnswered");
        var answeredRecord = Ext.create("VoteIt.model.QuestionAnswered", {});
        console.log(this.getVoteView().getRecord());
        var answeredVals = this.getVoteView().getRecord().getData();
        answeredRecord.set(answeredVals);
        questionsAnsweredStore.add(answeredRecord);
        questionsAnsweredStore.sync();
        questionsAnsweredStore.sort([{ property: 'created', direction: 'DESC'}]);


        }
});
