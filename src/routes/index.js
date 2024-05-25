const authRoute = require("./auth.route")
const tagsRoute = require("./tags.route")
const router = (app) => {
    app.use('/api/auth', authRoute)
    app.use('/api/tags', tagsRoute)
}

module.exports = router