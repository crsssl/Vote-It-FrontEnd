Ext.define("VoteIt.store.QuestionsFlagged", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "VoteIt.model.QuestionFlagged",
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'questionFlaggedProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
