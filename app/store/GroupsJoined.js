Ext.define("VoteIt.store.GroupsJoined", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
//        model: "VoteIt.model.GroupJoined",
        model: "VoteIt.model.Group",
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'groupJoinedProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
