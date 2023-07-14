const User = require('../models/user')

/**
 * Update the user balance on every operation 
 * 
 * @param {number} id user ID
 * @param {number} res operation cost
 * @returns {Promise<void>} A Promise that resolves when 
 * the new balance is calculated. If not enough balance return -1
 */
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