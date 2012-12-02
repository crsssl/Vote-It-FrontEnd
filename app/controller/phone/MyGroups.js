Ext.define('VoteIt.controller.phone.MyGroups', {
    extend: 'VoteIt.controller.MyGroups',

    config: {
        control: {
        	// The commands fired by main list container
            myGroupsView: {
                backCommand: "onBack",
                activateMyGroupsCommand: "onActivateMyGroups",
            	activateNewGroupCommand: "onActivateNewGroup",
                activateGroupCommand: "onActivateGroup"
            }
        }
    },

    onBack: function() {
        console.log('onBack');
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getMainView(), VoteIt.app.slideRightTransition);
    },

    onActivateMyGroups: function() {
        console.log('onActivateMyGroups');
        this.callParent();
        Ext.Viewport.animateActiveItem(this.getMyGroupsView(), VoteIt.app.slideRightTransition);
    },

    onActivateNewGroup: function () {
        console.log('onActivateNewGroup');
        this.callParent([Ext.Viewport]);
    },
    onActivateGroup: function (form, record) {
        console.log('onActivateGroup');
        console.log(record);
        this.callParent([Ext.Viewport, record]);
    }
});