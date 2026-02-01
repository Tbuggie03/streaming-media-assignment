const fs = require('fs'); // pull in the file system module
const path = require('path');

// const getIndex = (request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write(index);
//     response.end();
// };

const getPage = (request, response, page) => {
    const filepath = path.resolve(__dirname, `../client/${page}.html`);
    fs.readFile(filepath, (err, data) => {
        if (err) {
            response.writeHead(404, {'Content-Type': 'text/plain'});
            return response.end('Page Not Found');
        }  
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })
};

const getClient = (request, response) => getPage(request, response, 'client');
const getClient2 = (request, response) => getPage(request, response, 'client2');
const getClient3 = (request, response) => getPage(request, response, 'client3');



module.exports = {
    getClient,
    getClient2,
    getClient3
    };