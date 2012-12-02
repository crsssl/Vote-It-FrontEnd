Ext.define("VoteIt.model.Group", {
    extend: "Ext.data.Model",

    config: {
        idProperty: 'group_id',
        identifier: { isUnique: true },
        fields: [
            { name: 'group_id', type: 'string' },
            { name: 'hashtag', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'privacy', type: 'string' },
            { name: 'created', type: 'date', dateFormat: 'c' }
/*
            { name: 'calcField',
                type: 'int',
                convert: function (val, rec) {
                    var maxSome = something();
                    if (rec.data.id || val > maxSome) {
                        return maxSome;
                    } else {
                        return Math.round(val);
                    }
                }
            },
*/

        ],
        validations: [
            { type: 'presence', field: 'title',
                message: 'Title is required'
            },
            { type: 'inclusion', field: 'privacy', list: ['open', 'invite'],
                message: 'Bad availType'
            },
        ],
        proxy: {
            type: 'localstorage',
            id: 'groupProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
