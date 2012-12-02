Ext.define("VoteIt.store.Questions", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "VoteIt.model.Question",
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'questionProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
