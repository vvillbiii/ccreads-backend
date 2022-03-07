//EXPRESS CONNECTION
const express = require("express");
const app = express();

require("dotenv").config;
const { PORT = 4000 } = process.env;

//CORS MIDDLEWARE
const cors = require("cors");

//DB CONNECTION
const dbConnection = require("./config/db.connections");

//Controllers
const controllers = require("./controllers");

app.use(cors());
app.use(express.json());
app.use("/articles", controllers.article);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
