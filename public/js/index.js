'use strict';
var app = angular.module('app',['ui.router','ngMaterial']);

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

app.controller('navCtrl', function ($scope, $mdSidenav) {
	var self = this;
    self.hidden = false;
    self.isOpen = false;
    self.hover = false;    
    $scope.$watch('demo.isOpen', function(isOpen) {
	    if (isOpen) {
	      $timeout(function() {
	        $scope.tooltipVisible = self.isOpen;
	      }, 200);
	    } else {
	      $scope.tooltipVisible = self.isOpen;
	    }
	});

    $scope.toggleLeft = function(){
    	$mdSidenav('left').toggle();    	
    } 

    $scope.closeNav = function(){
    	$mdSidenav('left').close();
    }
});  

app.controller('loginCtrl',function($scope,$state){
	$scope.startChart = function(login){
		$state.go('home',{
			name:login.username,
			room:login.roomname
		});
	}
});

app.controller('chatCtrl', function($scope,$stateParams){
	var name = $stateParams.name;
	var room = $stateParams.room;	
});

app.controller('aboutCtrl', function($scope){

});
