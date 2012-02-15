Ext.application({
    name: 'Sencha',

    controllers: ['Main'],
    views: [
        'Main',
        'StylePicker',
    ],
    stores: ['Styles', 'SearchTimelineStore'],

    launch: function() {
        Ext.create('Sencha.view.StylePicker');
        Ext.Viewport.add({
            xclass: 'Sencha.view.Main'
        });
    }
});
