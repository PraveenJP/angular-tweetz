'use strict';
var app = angular.module('app',['ui.router','ngMaterial','luegg.directives']);

app.config(function($stateProvider,$urlRouterProvider,$mdThemingProvider) {
	 $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('red');

	$stateProvider
	.state('login',{
		url:'/login',
		templateUrl:'template/login.html',
		controller:'loginCtrl'
	})
	.state('home',{
		url:'/home/:name/:room',
		templateUrl:'template/home.html',
		controller:'chatCtrl'
	})
	.state('about',{
		url:'/about',
		templateUrl:'template/about.html',
		controller:'aboutCtrl'
	})
	$urlRouterProvider.otherwise('/login');
});

app.controller('navCtrl', function ($scope, $mdSidenav, $timeout) {

    $scope.toggleLeft = function(){
    	$mdSidenav('left').toggle();    	
    } 

    $scope.closeNav = function(){
    	$mdSidenav('left').close();
    }
});  
