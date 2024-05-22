const authRoute = require("./auth.route")

const router = (app) => {
    app.use('/api/auth', authRoute)
}

module.exports = router