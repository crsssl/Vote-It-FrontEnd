Ext.define("VoteIt.store.GroupsFlagged", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "VoteIt.model.GroupFlagged",
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'groupFlaggedProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
