Ext.define("VoteIt.store.AnswersSelected", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "VoteIt.model.AnswerSelected",
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'answerSelectedProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
