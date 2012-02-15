Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainPanel:          'mainview',
            globalToolbar:      'globaltoolbar',
            maskButton:         'button[action=reticulateSplines]',
            styleChooserButton: 'button[action=chooseStyles]',
            styleBubble:        'stylepicker',
            styleList:          'stylepicker list',
        },
        control: {
            maskButton: {
                tap: 'toggleMask'
            },
            styleChooserButton: {
                tap: 'showStyleChooser'
            },
            styleList: {
                select: 'changeTheme'
            }
        }
    },

    showStyleChooser: function(button) {
        this.getStyleBubble().showBy(button)
    },

    toggleMask: function() {
        var main = this.getMainPanel()
        if (!main.getMasked()) {
            main.setMasked({
                xtype: 'loadmask',
                message: 'Reticulating splines...',
                indicator: true
            });
        } else {
            main.unmask();
        };
    },

    changeTheme: function(dataview, record) {
        var stylesheets = this.getStylesheets(),
            targetTheme = record.data.id,
            main = this.getMainPanel(),
            sheet, interval;

        main.setMasked({
            xtype: 'loadmask',
            message: 'Theming',
            indicator: false
        });

        stylesheets[targetTheme].removeAttribute('disabled');
        interval = setInterval(function() {
            if (stylesheets[targetTheme].sheet
                && stylesheets[targetTheme].sheet.cssRules.length) {
                clearInterval(interval);
                for (sheet in stylesheets) {
                    if (sheet != targetTheme) {
                        stylesheets[sheet].setAttribute('disabled', true);
                    }
                }
                main.unmask();
            }
        }, 100);
    },

    getStylesheets: function() {
        var stylesheets = {}, store;
        if (!this.stylesheets) {
            store = this.getStyleList().getStore();
            for (var i = store.data.items.length - 1; i >= 0; i--){
                theme = store.data.items[i].data;
                stylesheets[theme['id']] = document.getElementById(theme['id'])
            };
            this.stylesheets = stylesheets;
        }
        return this.stylesheets;
    },

});
