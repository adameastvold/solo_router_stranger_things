var myApp = angular.module("myApp", ["ngRoute"]); //depency injection is what the array is

myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
    when("/home", {
        templateUrl: "/views/partials/home.html"
    }).
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
        redirectTo: "/home"
    });
}]);

myApp.controller("ElevenController", ["$scope", function($scope) {
    console.log("eleven working");
    $scope.quote = "'The gate. I opened it. I'm the monster.'";
}]);

myApp.controller("ChiefController", ["$scope", function($scope) {
    console.log("chief workin");
    $scope.quote = "'Mornings are for coffee and contemplation'";
}]);

myApp.controller("DustinController", ["$scope", function($scope) {
    console.log("super dustin");
}]);
