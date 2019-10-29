const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';

console.log(fs.existsSync(mars));

let data = fs.readFileSync(mars, 'utf-8');
console.log(`
${mars} content:
${data}
`);

fs.writeFileSync(jupiter, 'Jupiter has the shortest day of all planets.');

data = fs.readFileSync(jupiter, 'utf-8');
console.log(`
${jupiter} content:
${data}
`);

fs.appendFileSync(jupiter, '\nsome text.');

data = fs.readFileSync(jupiter, 'utf-8');
console.log(`
${jupiter} content:
${data}
`);