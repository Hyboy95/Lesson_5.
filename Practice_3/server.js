let http = require('http');
let fs = require('fs');
let qs = require('qs');

let server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/register.html', (err, data) => {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end',() => {
            console.log(qs.parse(data));
            return res.end('Register success!');
        })
        req.on('error', () => console.log('error'))
    }
})

server.listen(8000,() => console.log('Server running at http://localhost:8000'))