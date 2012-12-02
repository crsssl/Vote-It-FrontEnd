Ext.define('VoteIt.view.DetailView', {
    extend: 'Ext.Container',
    xtype: 'detailview',

    config: {
        layout: {
            type: 'card'
        },
        items: [{
        	itemId: "noDetailPage",
        	html: "Select an item from the main view"
        },{
            itemId: "mygroupsview",
            xtype: "mygroupsview"
        },{
            itemId: "newgroupview",
            xtype: "newgroupview"
        },{
            itemId: "groupview",
            xtype: "groupview"
        },{
            itemId: "myquestionsview",
            xtype: "myquestionsview"
        },{
            itemId: "newquestionview",
            xtype: "newquestionview"
        },{
            itemId: "findgroupview",
            xtype: "findgroupview"
        },{
            itemId: "questionsview",
            xtype: "questionsview"
        },{
            itemId: "questionview",
            xtype: "questionview"
/*
        },{
            itemId: "voteview",
            xtype: "voteview"
*/
/*
        },{
            itemId: "someEditor",
            xtype: "editor"
        },{
        	itemId: "somePage",
        	xtype: "page"
*/
        }]
    }
});