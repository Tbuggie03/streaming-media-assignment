const { error } = require('console');
const fs = require('fs');

const getPage = (request, response, page) => {
    const filePath = path.resolve(__dirname, `../client/${page}.html`);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.writeHead(404);
            return response.end('Page not found');
        }
        response.writeHead(200, { 'Content-Type': 'test/html' });
        response.end(data);
    })
};

const getClient = (request, response) => getPage(request, response, 'client');
const getClient2 = (request, response) => getPage(request, response, 'client2');
const getClient3 = (request, response) => getPage(request, response, 'client3');


module.exports = {
    getClient,
    getClient2,
    getClient3,
};
