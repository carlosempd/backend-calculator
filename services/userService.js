const User = require('../models/user')

const updateUserBalance = async(id, cost) => {
    try {
        const user = await User.findById(id)
        const newBalance = user.balance - cost
        if (newBalance < 0) {
            return -1
        }
        user.balance = newBalance
        await user.save()
        return newBalance;

    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    updateUserBalance
}