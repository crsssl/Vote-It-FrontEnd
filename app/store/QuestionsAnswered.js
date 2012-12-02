Ext.define("VoteIt.store.QuestionsAnswered", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "VoteIt.model.QuestionAnswered",
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'questionAnsweredProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
