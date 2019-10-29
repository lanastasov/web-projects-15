const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';


// writeFile
// readFile
// console.log
// appendFile
// readFile
// console.log
// catch statement

fs.promises.writeFile(jupiter, 'I am learning Node!')
    .then(() => fs.promises.readFile(jupiter, 'utf-8'))
    .then(data => { console.log(`${jupiter} content: ${data}`) })
    .then(() => { fs.promises.appendFile(jupiter, '\nIt is so fun!'); })
    .then(() => fs.promises.readFile(jupiter, 'utf-8'))
    .then(data => { console.log(`${jupiter} content: ${data}`) })
    .catch(err => { console.log(`Error: ${err}`); });