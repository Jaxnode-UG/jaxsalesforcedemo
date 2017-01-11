
const http = require('http');

const json = JSON.stringify({
    msg: 'Hello Salesforce Developers'
});

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(json);
}).listen(8080, 'localhost', () => console.log('Http server running.'));
