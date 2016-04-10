'use strict';
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

io.on('connection',function(socket){
	//console.log('User connected');
	socket.on('send-message',function(data){
		io.emit('get-message',data);
	});
});

http.listen(PORT,function(err){
	if(err){
		console.log(err);
	}else{
		console.log('Server running on:'+PORT);
	}
});