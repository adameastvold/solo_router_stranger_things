var myApp = angular.module("myApp", ["ngRoute"]); //depency injection is what the array is

myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
    when("/eleven", {
        templateUrl: "/views/partials/eleven.html",
        controller: "ElevenController"
    }).
    when("/chief", {
        templateUrl: "/views/partials/chief.html",
        controller: "ChiefController"
    }).
    when("/dustin", {
        templateUrl: "/views/partials/dustin.html",
        controller: "DustinController"
    }).
    otherwise({
        redirectTo: "/eleven"
    });
}]);

myApp.controller("ElevenController", ["$scope", function($scope) {
    console.log("eleven working");
    $scope.message = "Eleven is awesome";
}]);

myApp.controller("ChiefController", ["$scope", function($scope) {
    console.log("chief workin");
}]);

myApp.controller("DustinController", ["$scope", function($scope) {
    console.log("super dustin");
}]);
