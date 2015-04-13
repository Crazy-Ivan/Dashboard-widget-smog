angular.module('widget')
    .controller('smogAlertCtrl', ['$scope', function($scope){

        var chartData = [];

        $scope.chartData = function() {
            var pollutant =  parseInt($scope.widget.data[0].value, 10),
                space = 100 - pollutant,
                color = $scope.widget.data[0].caqicolor;

            if(space < 0) {
                space = 0;
            }

            chartData.length = 0;
            chartData.push({value: pollutant, color: color});
            chartData.push({value: space, color: '#000'});

            return chartData;
        };

        $scope.chartOptions = {
            segmentShowStroke : false,             //Boolean - Whether we should show a stroke on each segment
            percentageInnerCutout : 95,            //The percentage of the chart that we cut out of the middle.
            animation : true,                      //Boolean - Whether we should animate the chart
            animateRotate : false,                 //Boolean - Whether we animate the rotation of the Doughnut
            animateScale : true                    //Boolean - Whether we animate scaling the Doughnut from the centre
        };
    }])

    .controller('smogAlertEditCtrl', ['$scope', '$collection', function($scope, $collection) {
        var stationCollection = $collection.getInstance();

        stationCollection.addAll([
            {address: 'Al.Krasińskiego', city: 'Kraków', 'url': getUrl('krasinskiego')},
            {address: 'ul. Bulwarowa', city: 'Kraków', 'url': getUrl('bulwarowa')},
            {address: 'ul. Bujaka', city: 'Kraków', 'url': getUrl('bujaka')}
        ]);

        $scope.station = $scope.widget.options.dataBind.source;

        $scope.stations = stationCollection.all();

        $scope.save = function() {
            $scope.widget.options.dataBind.source = $scope.station;
            $scope.widget.getData().then(function() {
            $scope.widget.flip();
            });
        };

        function getUrl(location) {
            return 'http://powietrze.malopolska.pl/data/data.php?type=smartmeasurement&city=krakow&location=' + location + '&parameter=caqi';
        }
    }]);