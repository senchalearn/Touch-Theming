Ext.define('Sencha.view.Action', {
    extend: 'Ext.Container',
    xtype: 'actioncard',

    config: {
        iconCls: 'action',
        title: 'action',
        styleHtmlContent: true,
        scrollable: 'vertical',
        cls: 'styledContent',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            scrollable: 'horizontal',
            defaults: {
                iconMask: true,
                ui: 'plain' ,
            },
            items: [
                { iconCls: 'action' },
                { iconCls: 'add' },
                { iconCls: 'arrow_down' },
                { iconCls: 'arrow_left' },
                { iconCls: 'arrow_right' },
                { iconCls: 'arrow_up' },
                { iconCls: 'bookmarks' },
                { iconCls: 'compose' },
                { iconCls: 'delete' },
                { iconCls: 'download' },
                { iconCls: 'favorites' },
                { iconCls: 'home' },
                { iconCls: 'info' },
                { iconCls: 'locate' },
                { iconCls: 'maps' },
                { iconCls: 'more' },
                { iconCls: 'organize' },
                { iconCls: 'refresh' },
                { iconCls: 'reply' },
                { iconCls: 'search' },
                { iconCls: 'settings' },
                { iconCls: 'star' },
                { iconCls: 'team' },
                { iconCls: 'time' },
                { iconCls: 'trash' },
                { iconCls: 'user' }
            ]
        }],
        html: "<p>The default Sencha Touch theme includes 20 icons:</p><ul><li>action</li> <li>add</li> <li>arrow_down</li> <li>arrow_left</li> <li>arrow_right</li> <li>arrow_up</li> <li>bookmarks</li> <li>compose</li> <li>delete</li> <li>download</li> <li>favorites</li> <li>home</li> <li>info</li> <li>locate</li> <li>maps</li> <li>more</li> <li>organize</li> <li>refresh</li> <li>reply</li> <li>search</li> <li>settings</li> <li>star</li> <li>team</li> <li>time</li> <li>trash</li> <li>user</li></ul><p>These are bundled in the default theme for convenience, but it's easy to add other icons.</p>"
    }
});
