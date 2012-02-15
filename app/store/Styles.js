Ext.define('Sencha.store.Styles', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['id', 'name'],
        data: [{
            id:   'default',
            name: 'Default theme'
        },{
            id:   'dark',
            name: 'Dark theme'
        },{
            id:   'light',
            name: 'Light theme'
        }]
    }
});
