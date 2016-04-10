app.controller('loginCtrl',function($scope,$state){
	$scope.startChart = function(login){
		$state.go('home',{
			name:login.username,
			room:login.roomname
		});
	}
});

app.controller('chatCtrl', function($scope,$stateParams,socket){
	$scope.name = $stateParams.name;
	$scope.room = $stateParams.room;	
	$scope.message = [];

	$scope.sendMsg = function(){				
		socket.emit('send-message',{
			name:$scope.name,
			text:$scope.message.text
		});
		$scope.message.text = '';
	}

	socket.on('get-message', function(data) {
	      $scope.message.push(data);	  
	      $scope.$digest()  
	});
});

app.controller('aboutCtrl', function($scope){

});