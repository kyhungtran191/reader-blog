const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const rootRouter = require('./routes/index')
const bodyParser = require("body-parser");
// Basic route

const app = express();
dotenv.config();


app.use(cors())
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ limit: "50mb" }));



app.get("/", (req, res) => {
    res.status(200).json({
        message: "Ok",
        data: []
    })
})

app.get("/api/users/:id", (req, res) => {
    console.log(req.params)
})


rootRouter(app)

const PORT = process.env.PORT || 8080;
// Start server
app.listen(PORT, () => {
    console.log(`App running on port  ${PORT}`)
})