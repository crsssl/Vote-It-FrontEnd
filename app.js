Ext.application({
    name: 'VoteIt',

    requires: [
        'Ext.MessageBox'
    ],

    controllers: ["MainView",
        "MyGroups", "NewGroup", "Group",
        "FindGroup",
        "Questions", "MyQuestions",
        "NewQuestion", "Question",
        "Vote"
    ],
    models: [
        "Group", "GroupJoined",
        "Question", "QuestionAnswered",
    ],
    profiles: ["Phone", "Tablet"],
    stores: [
        "Groups", "GroupsJoined",
        "Questions", "QuestionsAnswered",
    ],
    views: [
        "MainView", "DetailView",
        "MyGroupsView", "NewGroupView", "GroupView",
        "FindGroupView",
        "QuestionsView", "MyQuestionsView",
        "NewQuestionView", "QuestionView",
        "VoteView"
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        'desktop': 'resources/startup/1536x2008.png',
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    // =================================
    // Set up our app's global variables
    // =================================

    // Std panel transitions used in this app
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    popInTransition: { type: 'pop'},
    popOutTransition: { type: 'pop', out: true },

    // =========================================
    // Set up our app's generic global functions
    // =========================================

    // Percentage value formatting
    percentFormat: function (val) {
        return (Math.round(val * 1000) / 10) + '%';
    },

    // Percentage value formatting
    roundToDecimals: function (val, decs) {
        return (Math.round(val * Math.pow(10, decs)) / Math.pow(10, decs));
    },

    addCommas: function (nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    },

    // Calculate the difference between two dates
    dateDiff: function (type, d1, d2) {
        function inDays () {
            var t2 = d2.getTime();
            var t1 = d1.getTime();
            return parseInt((t2-t1) / (24*3600*1000));
        }
        function inWeeks () {
            var t2 = d2.getTime();
            var t1 = d1.getTime();     
            return parseInt((t2-t1) / (24*3600*1000*7));
        }
        function inMonths () {
            var d1Y = d1.getFullYear();
            var d2Y = d2.getFullYear();
            var d1M = d1.getMonth();
            var d2M = d2.getMonth();
            return (d2M+12*d2Y) - (d1M+12*d1Y);
        }
        function inYears () {
            return d2.getFullYear() - d1.getFullYear();
        }

        if (type == 'd')      { return inDays(); }
        else if (type == 'w') { return inWeeks(); }
        else if (type == 'm') { return inMonths(); }
        else if (type == 'y') { return inYears(); }
        else { throw "dateDiff type not recognized"; }
    },
/*
    // Generalized pop-up help function
    showHelp: function (helpHtml) {
        var popup = new VoteIt.view.HelpView;

        // Keep width of help pop-up to 500px maximum (and still keep min 10px margin)
        var devWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (devWidth > VoteIt.app.helpMaxWidth + 10 + 10) {
            var helpLeftRight = Math.round((devWidth - VoteIt.app.helpMaxWidth) / 2);
            popup.setLeft(helpLeftRight);
            popup.setRight(helpLeftRight);
        }
        // Get the html with the help
        Ext.Ajax.request({
            url: 'resources/help/' + helpHtml,
            success: function (response, opts) {
                popup.setHtml(response.responseText);        
            },
            failure: function (response, opts) {
                popup.setHtml(
                    "<p>Help file <strong>'" + helpHtml + "'</strong> not found</p>"
                );        
            }
        });
        // Show it...
        Ext.Viewport.add(popup);
        popup.show(VoteIt.app.popInTransition);
    },
*/

    // ===========================================================
    // Set up our app's model validations for model field checking
    // ===========================================================
/*
    setupValidations: function() {
        Ext.applyIf(Ext.data.Validations, {
            positiveNumber: function (config, value) {
                // No configs read, so allow just value to be passed
                if (arguments.length === 1) { value = config; }
                return !isNaN(parseFloat(value)) && isFinite(value) && value > 0;
            }
        });
        Ext.applyIf(Ext.data.Validations, {
            notNegative: function (config, value) {
                // No configs read, so allow just value to be passed
                if (arguments.length === 1) { value = config; }
                return !isNaN(parseFloat(value)) && isFinite(value) && value >= 0;
            }
        });
    },
*/
    // ====================================================
    // OK. Now define and perform basic Sencha launch stuff
    // ====================================================

    launch: function() {
        console.log("Device width: " + ((window.innerWidth > 0) ? window.innerWidth : screen.width));

        // Set up any store(s), first time in
        Ext.getStore("Groups").sort([{ property: 'created', direction: 'DESC'}]);
        Ext.getStore("GroupsJoined").sort([{ property: 'created', direction: 'DESC'}]);
        Ext.getStore("Questions").sort([{ property: 'created', direction: 'DESC'}]);

    },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
});
