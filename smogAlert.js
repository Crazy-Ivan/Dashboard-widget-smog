angular.module('widget')
    .config(function(widgetServiceProvider) {
        widgetServiceProvider.register('smog alert', {
            sizex: 2,
            sizey: 2,
            color: '#292625',
            template: 'Dashboard-widget-smog/smogAlert.html',
            editTemplate: 'Dashboard-widget-smog/smogAlertEdit.html',
            dataBind: {
                type: 'external',
                source: 'http://smogalert.pl/api/stats/krakow-krasinskiego',
                interval: 600000
            }
        });
    });
