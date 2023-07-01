const express = require('express');
const logging = require("./middlewares/logging")
const Joi = require('joi');
const business_routes = require('./businesses/routes')
const users_routes = require('./users/routes')
const core_routes = require('./core/routes')

const app = express();
app.use(express.json()) // enables midle where that  converts request body to json object
app.use(logging)
app.use("/business", business_routes)
app.use("/users", users_routes)
app.use("/", core_routes)

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Listening on port  ${PORT}....`);
})