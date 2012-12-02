Ext.define("VoteIt.model.Question", {
    extend: "Ext.data.Model",

    config: {
        idProperty: 'question_id',
        fields: [
            { name: 'question_id', type: 'string' },
            { name: 'group', type: 'string' },
            { name: 'question_text', type: 'string' },
            { name: 'conversation', type: 'string' },
            { name: 'show_tally', type: 'boolean' },
            { name: 'answer1', type: 'string' },
            { name: 'answer2', type: 'string' },
            { name: 'answer3', type: 'string' },
            { name: 'tally1', type: 'int' },
            { name: 'tally2', type: 'int' },
            { name: 'tally3', type: 'int' },
            { name: 'closed', type: 'boolean' },
            { name: 'created', type: 'date', dateFormat: 'c' }
        ],
        validations: [
            { type: 'presence', field: 'question_text',
                message: 'Text is required'
            },
            { type: 'length', field: 'question_text', min: 3, max: 120,
                message: 'Text should be between 3 and 120 characters'
            },
        ],
        proxy: {
            type: 'localstorage',
            id: 'questionProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
