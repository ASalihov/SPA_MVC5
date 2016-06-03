/// <reference path="../angular.js" />
var module = angular.module("StudentApp", ["ngRoute", "stucontrollers", "sturesources"]);

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'GetStudentsList'
        }).
        when('/addstudent', {
            templateUrl: 'templates/addstudent.html',
            controller: 'AddStudent'
        }).
        when('/allstudents', {
            templateUrl: 'templates/allstudents.html',
            controller: 'GetStudentsList'
        }).
    otherwise({
        redirectTo: '/home'
    });
}]);