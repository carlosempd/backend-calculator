const { usersData, operationsData } = require('../mock/dataSeed')
const User = require('../models/user')
const Operation = require('../models/operation')

const runSeed = async(req, res) => {
    await deleteData()
    const createdUser = await insertUsers()
    await insertOperations(createdUser)

    res.json({
        message: 'SEED OK'
    })
}

const deleteData = async() => {
    try {
        await Operation.deleteMany({})
        await User.deleteMany({})

    } catch (error) {
        console.error(error.message)
    }

}

const insertUsers = async() => {
    const users = usersData
    const dbUsers = await User.create(users)
    return dbUsers[0]
}

const insertOperations  =async(user) => {
    const operations = operationsData
    const insertOperationPromises = []

    operations.forEach(operation => {
        insertOperationPromises.push(Operation.create({
            ...operation,
            user: user._id
        }))
    })

    await Promise.all(insertOperationPromises)
    return true
}

module.exports = runSeed