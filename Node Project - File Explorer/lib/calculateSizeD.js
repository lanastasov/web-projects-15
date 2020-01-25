const {execSync} = require('child_process');

const calculateSizeD = itemFullStaticPath => {
    const itemFullStaticPathCleaned = itemFullStaticPath.replace(/\s/g, '\ ');
    const commandOutput = execSync(`du - sh "${itemFullStaticPathCleaned}"`).toString();

    console.log(commandOutput);

    let filesize = commandOutput.replace(/\s/g, '');
    filesize = filesize.split('/');
    filesize = filesize[0];
    console.log(filesize);
    
    const filesizeUnit = filesize.replace(/\d|\./g, '');
    console.log(filesizeUnit);
    const filesizeNumber = filesize.replace(/[a-z]/i/g, '');
    console.log(filesizeNumber);

    return [filesize, 110*1000*1000];
};

module.exports = calculateSizeD;