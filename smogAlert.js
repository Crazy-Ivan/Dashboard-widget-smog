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
                source: 'http://powietrze.malopolska.pl/data/data.php?type=smartmeasurement&city=krakow&location=krasinskiego&parameter=caqi',
                interval: 600000
            }
        });
    });
