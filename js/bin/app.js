    $(document).ready(function(){

        $('.slider').slider({
            full_width: true,
            height: 500
        });

        $(".button-collapse").sideNav();

        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false,
                hover: true,
                gutter: 2,
                belowOrigin: true,
                alignment: 'right'
        });

        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 100
        });

        $('.modal-trigger').leanModal({
                dismissible: true,
                opacity: .5,
                in_duration: 300,
                out_duration: 200,
        });
    });

    var app = angular.module('MainPage', []);
    app.controller('sliderCtrl', function($scope, $http) {
        $http.get("http://localhost:63342/ISOI_Prime/js/JSON/ImagePath.json")
            .success(function(response) {$scope.sliderData = response.SliderData;});
    });
    app.controller('descriptionCtrl', function($scope, $http) {
        $http.get("http://localhost:63342/ISOI_Prime/js/JSON/ImagePath.json")
            .success(function(response) {$scope.Info = response.ChapterDescription;});
    });
    app.controller('updateCtrl', function($scope, $http) {
        $http.get("http://localhost:63342/ISOI_Prime/js/JSON/ImagePath.json")
            .success(function(response) {$scope.eventUpdates = response.EventUpdates;});
    });
    app.controller('memformCtrl', function($scope, $http) {
        $http.get("http://localhost:63342/ISOI_Prime/js/JSON/ImagePath.json")
            .success(function(response) {$scope.tcOBJ = response.TCOBJ;});

    });
