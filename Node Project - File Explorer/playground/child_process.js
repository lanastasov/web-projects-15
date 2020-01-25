const child_process = require('child_process');

console.log(child_process.execSync('pwd').toString());

try{
    const result = child_process.execSync('pwd').toString();
    console.log(result);

}catch(err) {
    console.log(`Error: ${err}`);
}