const http = require('http');
const port = 3000;
http.createServer((req, res) =>{// simbolo de flecha abreviacion de  function
    res.end('Hello world');
}).listen(port);