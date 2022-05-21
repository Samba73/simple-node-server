var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is the Default Page of Sambasivam github. Welcome to Jenkins.</p></body></html>');
        res.end();

    }
    else if (req.url == "/home") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Home Page from Sambasivam github and viewing through AJenkins.</p></body></html>');
        res.end();

    }
    else if (req.url == "/dashboard") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Dashboard Page from Sambasivam github.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')
