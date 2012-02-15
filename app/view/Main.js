Ext.define('Sencha.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'mainview',
    requires: [
        'Sencha.view.Home',
        'Sencha.view.Action',
        'Sencha.view.GlobalToolbar',
        'Sencha.view.TwitterSearch',
    ],

    config: {
        ui: 'dark',
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [{
            xtype: 'homecard'
        },{
            xtype: 'actioncard'
        },{
            xtype: 'twittersearch'
        },{
            xtype: 'globaltoolbar'
        }]
    }
});
