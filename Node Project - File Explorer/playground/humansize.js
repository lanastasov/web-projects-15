console.log(Math.log10(1000));
console.log(Math.log10(10000));

const filesize = 10000; //bytes
const units = "BKMGT"; 

const index = Math.floor(Math.log10(filesize)/3);

const filesizeHuman = (filesize/Math.pow(1000, index)).toFixed(1);

`${filesizeHuman} ${units[index]}`;