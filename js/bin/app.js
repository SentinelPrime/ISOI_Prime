    $(document).ready(function(){

        $('.slider').slider({
            full_width: true,
            height:500
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
