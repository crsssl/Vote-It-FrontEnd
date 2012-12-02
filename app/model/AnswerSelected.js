Ext.define("VoteIt.model.AnswerSelected", {
    extend: "Ext.data.Model",

    config: {
        idProperty: 'num',
        fields: [
            { name: 'num', type: 'string' },
            { name: 'when', type: 'date', dateFormat: 'c' }
        ],
        proxy: {
            type: 'localstorage',
            id: 'AnswerSelectedProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
