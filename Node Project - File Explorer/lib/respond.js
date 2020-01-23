const url = require('url');
const path = require('path');
const fs = require('fs');
const staticBasePath = path.join(__dirname, '..','static');

const respond = (request, response) => {
    
    // console.log('respond fired');
    let pathname = url.parse(request.url, true).pathname;

    if(pathname === '/favicon.ico') {
        return false;
    }
    console.log(pathname);

    pathname = decodeURIComponent(pathname);

    const fullStaticPath = path.join(staticBasePath, pathname);

    if(!fs.existsSync(fullStaticPath)) {
        console.log(`${fullStaticPath} does not exist`);
        response.write('404: File not found!');
        response.end();
    }else {
        response.write('File found!');
        response.end();
    }
}
module.exports = respond;