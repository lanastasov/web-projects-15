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
    const filesizeNumber = parseFloat(filesize.replace(/[a-z]/i/g, ''));
    console.log(filesizeNumber);

    const units = "BKMGT";

    //B 10B -> 10 (*1000^0 )
    //K 10K ->  10*1000 (*1000^1)
    //M 10M -> 10*1000*1000 (*1000^2)
    //G 10G -> 10*1000*1000*1000 (*1000^3)
    //T 10T -> 10*1000*1000*1000*1000 (*1000^4)

    const filesizeBytes = filesizeNumber * Math.pow(1000, units.indexOf(filesizeUnit));

    return [filesize, 110*1000*1000];
};

module.exports = calculateSizeD;