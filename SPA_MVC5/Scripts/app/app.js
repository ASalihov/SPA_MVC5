/// <reference path="../angular.js" />
var module = angular.module("StudentApp", ["ngRoute", "stucontrollers", "sturesources"]);

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'GetStudentsList'
        }).
        when('/addstudent', {
            templateUrl: 'templates/home.html',
            controller: 'GetStudentsList'
        }).
        when('/allstudents', {
            templateUrl: 'templates/home.html',
            controller: 'GetStudentsList'
        }).
        otherwise({
            redirectTo: '/home'
        });
}])