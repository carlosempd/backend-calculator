const runSeed = require("../services/seedService")

const seed = ((req, res) => {
    runSeed(req, res)
})

module.exports = seed