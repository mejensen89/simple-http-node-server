const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {
	fs.writeFileSync('./hello-world.txt', "Hello to this great world", "utf-8");
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if(err){
		return console.log('you have an error ${err}');
	}
	console.log('server is listening on ${port}');
});
