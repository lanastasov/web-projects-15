const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';


fs.stat(mars, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`${mars} exists`);
    }
});

fs.chmod(mars, 0777, err => {
    if (err) {
        console.log(`Error: ${err}`);
    }
});

fs.access(mars, fs.constants.R_OK, err => {
    if (err) {
        console.log(`Error: ${err}`);
    }
});

fs.writeFile(jupiter, 'I am learning Node!', err => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        fs.readFile(jupiter, 'utf-8', (err, data) => {
            if (err) {
                console.log(`Error: ${err}`);
            } else {
                console.log(`${jupiter} content: ${data}`);
                fs.appendFile(jupiter, '\nIt is so fun!', err => {
                    if (err) {
                        console.log(`Error: ${err}`);
                    } else {
                        fs.readFile(jupiter, 'utf-8', (err, data) => {
                            if (err) {
                                console.log(`Error: ${err}`);
                            } else {
                                console.log(`${jupiter} content: ${data}`);
                            }
                        });
                    }
                })
            }
        });
    }
})

console.log("hello");