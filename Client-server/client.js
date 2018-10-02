const net = require('net');

var client = new net.Socket();
client.connect(12964, '0.tcp.ngrok.io', function(){
  console.log('Connected');
  client.write('Путь: ' + process.cwd())
  client.write(`Hello, I'm Ivan`);
});

client.on('data', function(data){
  console.log('Received from server: ' + data);
  client.destroy();
});

client.on('close', function(){
  console.log('Connection closed');
});

client.on('error', function(err){
  console.log('Error: ' + err);
});
