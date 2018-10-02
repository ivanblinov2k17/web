//load tcp lib
const net = require('net');
const figlet = require('figlet')

var banner;
figlet('Node.js - Net Server',function(err, data){
  banner = console.log(data);
});

var server = net.createServer(function(socket){
  socket.on('error', function(err){
    console.log('Error: ' + err);
  });
  socket.on('data', function(data){
    console.log('Received: ' + data);
    socket.write(`I'm done`);
    socket.end()
  });
  //socket.write('Echo server\r\n');
  //socket.pipe(socket);
  //socket.end()
});

server.listen(8080, '127.0.0.1', function(){
  console.log('Server up!');
});
