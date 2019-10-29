const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';

// fs.promises.writeFile(jupiter, 'I am learning Node!')
//     .then(() => fs.promises.readFile(jupiter, 'utf-8'))
//     .then(data => { console.log(`${jupiter} content: ${data}`) })
//     .then(() => { fs.promises.appendFile(jupiter, '\nIt is so fun!'); })
//     .then(() => fs.promises.readFile(jupiter, 'utf-8'))
//     .then(data => { console.log(`${jupiter} content: ${data}`) })
//     .catch(err => { console.log(`Error: ${err}`); });


// use async await
async function f() {
    await fs.promises.writeFile(jupiter, 'I am learning Node!');
    let data = await fs.promises.readFile(jupiter, 'utf-8');
    console.log(`${jupiter} content: ${data}`);
    await fs.promises.appendFile(jupiter, '\nIt is so fun!');
    data = await fs.promises.readFile(jupiter, 'utf-8');
    console.log(`${jupiter} content: ${data}`);
}

f().catch(err => { console.log(`Error: ${err}`); });