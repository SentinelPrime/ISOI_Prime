/*
 * Created by Bhaskar on 9/20/2015.
 */


var appCtrl = angular.module('MainPage', []);

appCtrl.controller('sliderCtrl', function($scope, $http)
{
    $http.get("js/JSON/ImagePath.json").success(function(response)
    {
        $scope.sliderData = response.SliderData;
    });
});

appCtrl.controller('descriptionCtrl', function($scope, $http)
{
    $http.get("js/JSON/ImagePath.json").success(function(response)
    {
        $scope.Info = response.ChapterDescription;
    });
});

appCtrl.controller('updateCtrl', function($scope, $http)
{
    $http.get("js/JSON/ImagePath.json").success(function(response)
    {
        $scope.eventUpdates = response.EventUpdates;
    });
});

appCtrl.controller('memformCtrl', function($scope, $http)
{
    $http.get("js/JSON/ImagePath.json").success(function(response)
    {
        $scope.tcOBJ = response.TCOBJ;
    });
    $http.get("js/JSON/Members.json").success(function(response)
    {
        $scope.membersArr = response.Members;
    });
});