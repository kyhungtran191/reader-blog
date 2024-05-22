const userRouter = require("./users")

const router = (app) => {
    app.use('/api/auth', userRouter)
}

module.exports = router