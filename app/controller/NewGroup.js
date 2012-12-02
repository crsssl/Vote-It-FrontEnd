Ext.define("VoteIt.controller.NewGroup", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
        	// We're going to lookup our views by xtype
            mainView: "mainview",
            detailView: "detailview",
            myGroupsView: "mygroupsview",
            newGroupView: "newgroupview",
/*
            title: "#title",
            hashtag: "#hashtag",
            description: '#description',
            privacy: "#privacy",
*/
        },
        control: {
        	// The commands fired by 
            newGroupView: {
            	initializeCommand: "onInitialize",
                backCommand: "onBack",
                cancelCommand: "onCancel",
                okCommand: "onOk",
                ok2Command: "onOk2",
            }
        }
    },

    // Commands
    
	onInitialize: function () {
        console.log('onInitialize');
        var now = new Date();
        var newGroupId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
        var newGroup = Ext.create("VoteIt.model.Group", {
            group_id: newGroupId,
            created: now,
            title: "",
            description: "",
            hashtag: "",
            privacy: 'Open'
        });
        this.getNewGroupView().setRecord(newGroup);
	},
    onBack: function () {
        console.log('onBack');
        this.getMyGroupsView().fireEvent("activateMyGroupsCommand", this);
    },
    onCancel: function () {
        console.log('onCancel');
        this.getMyGroupsView().fireEvent("activateMyGroupsCommand", this);
    },
    onOk: function (form) {
        this.process(form, true);
    },
    onOk2: function (form) {
        this.process(form, false);
    },

    process: function (form, join) {
        console.log('onOk');
        console.log(arguments); 

        var record = form.getRecord();
        var vals = form.getValues();
        record.set(vals);

        console.log(record);

        // Do some basic checking of data to keep input realistic
        var basicErrors = false;
        var errorMessage = '';

        // Error checking
        if (Ext.String.trim(record.data.title) == '') {
                errorMessage += 'A title is required<br/>';
                basicErrors = true;
        }

        // OK, report any errors
        if (basicErrors) {
            Ext.Msg.alert('Invalid Input', errorMessage);
            record.reject();
            return;
        }

        // Finally, make sure "convert" fields fire

        // Set and validate the data
        var errors =  record.validate();
        if (!errors.isValid()) {           // Oops, uncaught problems reported by the model
            var errorMessage = '';
            errors.each(function (err) {
                errorMessage += err.getMessage() + '<br/>';
            });
            Ext.Msg.alert('Invalid Input', errorMessage);
            record.reject();
            return;
        }

        var groupsStore = Ext.getStore("Groups");
        groupsStore.add(record);
        // Finally store the data and get us outta here
        groupsStore.sync();
        groupsStore.sort([{ property: 'created', direction: 'DESC'}]);

        if (join) {
            console.log('joining');
            var groupsJoinedStore = Ext.getStore("GroupsJoined");

            var joinRecord = Ext.create("VoteIt.model.Group", {});
            var joinVals = record.getData();
            joinRecord.set(joinVals);
            console.log(joinRecord);
            groupsJoinedStore.add(joinRecord);
            groupsJoinedStore.sync();
            groupsJoinedStore.sort([{ property: 'created', direction: 'DESC'}]);
        }

        this.getMyGroupsView().fireEvent("activateMyGroupsCommand", this);
    },

    // Helpers

    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

/*
    launch: function () {
        this.callParent(arguments);
    },
    init: function () {
        this.callParent();
    }
*/
});
