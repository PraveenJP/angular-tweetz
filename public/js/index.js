'use strict';
var app = angular.module('app',['ui.router','ngMaterial']);

app.config(function($stateProvider,$urlRouterProvider) {
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'template/home.html'
	})
	.state('about',{
		url:'/about',
		templateUrl:'template/about.html'
	})
	$urlRouterProvider.otherwise('/home');
});

app.controller('navCtrl', function ($scope, $mdSidenav) {
    $scope.toggleLeft = function(){
    	$mdSidenav('left').toggle();    	
    } 
});  
