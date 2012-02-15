Ext.define('Sencha.view.GlobalToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'globaltoolbar',

    config: {
        docked: 'top',
        items: [{
            iconCls: 'list',
            iconMask: true,
            ui: 'plain',
            action: 'chooseStyles'
        },{
            xtype: 'spacer'
        },{
            iconCls: 'time_repeat',
            iconMask: true,
            ui: 'plain',
            action: 'reticulateSplines'
        }]
    }
});
