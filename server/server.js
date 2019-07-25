var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('/home/vishnu/lighthouse/movieguesser/src/Lobby/LobbyNav.jsx'); //react file for visual
});

io.on('connection', function(socket){
  console.log('a user connected1');
  socket.on('test', function(msg){
    console.log(msg);
    io.emit('test', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});