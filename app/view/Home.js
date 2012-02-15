Ext.define('Sencha.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homecard',

    config: {
        iconCls: 'home',
        title: 'home',
        styleHtmlContent: true,
        cls: 'styledContent',
        scrollable: 'vertical',
        html: "<p>The default Sencha Touch theme looks great, and it's really easy to customize it to look however you want it to. As well as being able to use the features we already know from CSS3, we can add new icons, or completely change the color scheme with only a couple of lines of SASS code.</p><p>Source code for this demo can be found <a href='https://github.com/senchalearn/Touch-Theming'>github</a></p>"
    }
});
