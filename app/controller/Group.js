Ext.define("VoteIt.controller.Group", {
    extend: "Ext.app.Controller",
    requires: [
        'Ext.ActionSheet'
    ],
    config: {
        refs: {
        	// We're going to lookup our views by xtype
            mainView: "mainview",
            detailView: "detailview",
            myGroupsView: "mygroupsview",
            groupView: "groupview",
            questionsView: "questionsview",

            joinedMessage: '#joinedMessage',
            joinButton: '#joinButton',

            title: "#title",
        },
        control: {
        	// The commands fired by 
            groupView: {
            	initializeCommand: "onInitialize",
                backCommand: "onBack",
                joinCommand: "onJoin",
                questionsCommand: "onQuestions",
            }
        }
    },

    // Commands
    
	onInitialize: function (record, returnView, returnCommand) {

        // This could come from anywhere. Just use the id to get the record
        var groupsStore = Ext.getStore("Groups");
        var groupRecord = groupsStore.findRecord('group_id', record.data.group_id);  // You can get a record with a given id.

        this.getGroupView().setRecord(groupRecord);

        var groupsJoinedStore = Ext.getStore("GroupsJoined");
        var joinedRecord = groupsJoinedStore.findRecord('group_id', record.data.group_id);  // You can get a record with a given id.
        if (! joinedRecord) {
            this.getJoinedMessage().setHidden(true);
            this.getJoinButton().setHidden(false);
        } else {    
            this.getJoinedMessage().setHidden(false);
            this.getJoinButton().setHidden(true);
        }

        this.getGroupView().returnView = returnView;
        this.getGroupView().returnCommand = returnCommand;
	},
    onBack: function () {
        this.getGroupView().returnView.fireEvent(this.getGroupView().returnCommand, this);
    },
    onJoin: function () {

        var actionSheet = Ext.create('Ext.ActionSheet', {
            items: [
                {
                    text: 'Do Not Join',
                    ui  : 'decline',
                    handler: function() {
                        actionSheet.hide();
                    }
                },
                {
                    text: 'Join',
                    ui  : 'confirm',
                    handler: function() {
                        var groupsJoinedStore = Ext.getStore("GroupsJoined");
                        var joinRecord = Ext.create("VoteIt.model.Group", {});
                        var joinVals = actionSheet.myView.getRecord().getData();
                        joinRecord.set(joinVals);
                        groupsJoinedStore.add(joinRecord);
                        groupsJoinedStore.sync();
                        groupsJoinedStore.sort([{ property: 'created', direction: 'DESC'}]);

                        actionSheet.myJoinedMessage.setHidden(false);
                        actionSheet.myJoinButton.setHidden(true);

                        actionSheet.hide();
                    }
                }
            ]
        });

        actionSheet.myView = this.getGroupView();
        actionSheet.myJoinedMessage = this.getJoinedMessage();
        actionSheet.myJoinButton = this.getJoinButton();
        Ext.Viewport.add(actionSheet);
        actionSheet.show();
    },
    onQuestions: function () {
        var record = this.getGroupView().getRecord();
        this.getQuestionsView().fireEvent("activateQuestionsCommand", this, record);
    },

    // Helpers

/*
    launch: function () {
        this.callParent(arguments);
    },
    init: function () {
        this.callParent();
    }
*/
});
