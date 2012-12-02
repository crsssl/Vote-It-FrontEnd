Ext.define("VoteIt.store.FindGroups", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "VoteIt.model.Group",
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'findGroupProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
