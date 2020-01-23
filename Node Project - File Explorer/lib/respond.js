const respond = (request, response) => {
    response.write('respond fired');
    response.end();
    // console.log('respond fired');
}
module.exports = respond;