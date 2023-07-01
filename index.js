const express = require("express");
const logging = require("./middlewares/logging");
const catalog_routes = require("./catalogs/routes");
const business_routes = require("./businesses/routes");
const users_routes = require("./users/routes");
const core_routes = require("./core/routes");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/bizboost")
  .then((result) => console.log("Connected with mongo db"))
  .catch((error) => console.log("Couldnt connect to mongo-db", error.message));

const app = express();
app.use(express.json()); // enables midle where that  converts request body to json object
app.use(logging);
app.use("/business", business_routes);
app.use("/users", users_routes);
app.use("/catalog", catalog_routes);
app.use("/", core_routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port  ${PORT}....`);
});
