const mongoose = require("mongoose")

module.exports = (url, name) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url, {
            dbName: name,
            retryWrites: true,
            w: "majority"
        }).then(connected => {
            resolve(connected)
        }).catch(error => {
            reject(error)
        })
    })
}