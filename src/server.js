const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const rootRouter = require('./routes/index')
const bodyParser = require("body-parser");
const connectDb = require("./configs/db")
const morgan = require("morgan");
const { notFound, errHandler } = require("./configs/error")
// Basic route

const app = express();
dotenv.config();

app.use(cors())
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ limit: "50mb" }));
app.use(morgan("dev"))

rootRouter(app)
connectDb()
const PORT = process.env.PORT || 8080;
// Start server
app.all("*", notFound)
app.use(errHandler)
app.listen(PORT, () => {
    console.log(`App running on port  ${PORT}`)
})