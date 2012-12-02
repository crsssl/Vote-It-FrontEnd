Ext.define("VoteIt.store.Groups", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "VoteIt.model.Group",
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'groupProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
