
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.write('Hello Salesforce Developers!');
    res.end('\n');
}).listen(8080, 'localhost', () => console.log('Http server running.'));
