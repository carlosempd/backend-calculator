
const login = ((req, res) => {
    const { email, password } = req.value
    
    res.json({
        message: 'login ok!'
    })
})

module.exports = {
    login
}