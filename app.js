const express = require("express")
const mongoose = require('mongoose');

const app = express();

// conection to mongodb

mongoose.connect("mongodb://localhost:27017/todo_express", {
});
console.log(mongoose.connection.readyState);

// middlewares

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.set ("view engine", "ejs");

// Routes

app.use(require("./routes/index"))
app.use(require("./routes/todo"))



// server configurations

app.listen(3000, () => console.log("Server started listening on port: http://localhost:3000"));