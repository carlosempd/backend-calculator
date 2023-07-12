const axios = require('axios');

const apiKey = 'd79dda8b-4235-455f-9557-7b5645b3e34d';
const url = `https://api.random.org/json-rpc/4/invoke`;

const requestData = {
    jsonrpc: "2.0",
    method: "generateStrings",
    params: {
        apiKey,
        n: 1,
        length: 20,
        characters: "abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        replacement: true
    },
    id: 42
}

const getRandomString = async() => {
    const randomOrgResult = await axios.post(url, requestData)
    console.log(randomOrgResult.data.result.random.data[0]);
    return randomOrgResult.data.result.random.data[0]
}

module.exports = getRandomString