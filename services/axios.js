const axios = require('axios');

const instance = axios.create({
    BASEURL: 'https://jsonplaceholder.typicode.com'
});

module.exports = instance;