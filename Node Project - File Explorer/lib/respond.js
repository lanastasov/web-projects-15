const url = require('url');
const path = require('path');
const fs = require('fs');
const buildBreadcrumb = require('./breadcrumb.js')
const buildMainContent = require('./mainContent.js')

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
        return false;
    }

    let stats;
    try {
        stats = fs.lstatSync(fullStaticPath)
    } catch(err) {
        console.log(`lstatsync Error: ${err}`);
    }

    if(stats.isDirectory()) {
        let data = fs.readFileSync(path.join(staticBasePath, 'project_files/index.html'), 'utf-8');
        console.log(pathname);
        let pathElements = pathname.split('/').reverse();
        pathElements = pathElements.filter(element => element !== '');
        const folderName = pathElements[0];
        console.log(folderName);
        
        const breadcrumb = buildBreadcrumb(pathname);
        

        const mainContent = buildMainContent(fullStaticPath, pathname);

        data = data.replace('page_title', folderName);
        data = data.replace('pathname', breadcrumb);
        data = data.replace('mainContent', mainContent);

        response.statusCode = 200;
        response.write(data);
        response.end();
    };
  
}
module.exports = respond;