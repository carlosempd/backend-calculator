const axios = require('axios');
require('dotenv').config()

const apiKey = process.env.RANDOM_ORG_API_KEY
const url = process.env.RANDOM_ORG_URL
const charactersAvailableToGenerate = process.env.STRINGS_TO_GENERATE

const requestData = {
    jsonrpc: "2.0",
    method: "generateStrings",
    params: {
        apiKey,
        n: 1,
        length: 20,
        characters: charactersAvailableToGenerate,
        replacement: true
    },
    id: 42
}

const getRandomString = async() => {
    const randomOrgResult = await axios.post(url, requestData)
    return randomOrgResult.data.result.random.data[0]
}

module.exports = getRandomString