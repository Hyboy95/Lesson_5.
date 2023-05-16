const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./templates/index.html','utf-8',(err, data) => {
        if (err) {
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end('404 Not Found');
        }
        let username = 'Admin';
        data = data.replace('{username}', username)
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
})

server.listen(8000,'localhost',() => console.log('Server is running at http://localhost:8000'));