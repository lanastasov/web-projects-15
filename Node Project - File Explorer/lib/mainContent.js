const fs = require('fs');
const path = require('path');

const calculateSizeD = require('./calculateSizeD.js');

const buildMainContent = (fullStaticPath, pathname) => {
    let mainContent = '';
    let items;

    try {
        items = fs.readdirSync(fullStaticPath);
        console.log(items);
    }catch(err) {
        console.log(`readdirSync error: ${err}`);
        return `<div class="alert alert-danger">Internal Server Error</div>`;
    }
    
    items.forEach(item => {
        const link = path.join(pathname, item);

        let itemDetails = {};
        let icon, stats;
        const itemFullStaticPath = path.join(fullStaticPath, item);
        try{
            itemDetails.stats = fs.statSync(itemFullStaticPath);
        }catch(err){
            console.log(`statSync error: ${err}`);
            mainContent = '<div class="alert alert-danger">Internal Server Error</div>'
            return false;
        }

        if(itemDetails.stats.isDirectory()) {
            itemDetails.icon = '<ion-icon name="folder"></ion-icon>';

            [itemDetails.size, itemDetails.sizeBytes] = calculateSizeD(itemFullStaticPath);
        }else if (itemDetails.stats.isFile()){
            itemDetails.icon = '<ion-icon name="document"></ion-icon>';

            //  [itemDetails.size, itemDetails.sizeBytes] = calculateSizeF(itemFullStaticPath);
        }
        
        mainContent += `<tr>
        <td>${itemDetails.icon}<a href="${link}">${item}</a></td>
        <td>${itemDetails.size}</td>
        <td>12/08/2019, 09:00:00 PM</td>
        </tr>`
    });

   

    return mainContent;
};


module.exports = buildMainContent;