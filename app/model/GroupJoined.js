Ext.define("VoteIt.model.GroupJoined", {
    extend: "VoteIt.model.Group",

    config: {
        idProperty: 'group_id',
        identifier: { isUnique: true },
        proxy: {
            type: 'localstorage',
            id: 'groupJoinedProxy',
            reader: {
                type: 'json'
            }
        }
    }
});