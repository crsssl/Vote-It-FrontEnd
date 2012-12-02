Ext.define("VoteIt.model.QuestionAnswered", {
    extend: "VoteIt.model.Question",

    config: {
        idProperty: 'question_id',
        identifier: { isUnique: true },
        proxy: {
            type: 'localstorage',
            id: 'questionAnsweredProxy',
            reader: {
                type: 'json'
            }
        }
    }
});
