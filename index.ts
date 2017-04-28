/// <reference path="typings/index.d.ts" />
import * as express from "express";
import * as bodyParser from "body-parser";
import * as Quote from "./entities/quote";
import * as mongoose from "mongoose";

var restful = require('node-restful');

// =====================
// COMMON VARIABLES
// =====================
let appPort: number = (process.env.PORT || 1234);
let connectionString:string = (process.env.MONGODB_URI || 'mongodb://localhost/express-todo');


// =====================
// EXPRESS APP
// =====================
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("port", appPort);

// =====================
// REST API LOGIC
// =====================
var quoteApi = restful.model("quote", Quote.schema).methods(["get", "post", "put", "delete"]).register(app, "/api/quote");

// =====================
// MONGO DB
// =====================
mongoose.connect(connectionString);

// ===============
// SERVER
// ===============
let port: number = app.get("port");
var server = app.listen(port, function() {
  // note: Only for debugging purposes to see that your variables are set correctly...
  console.log("connectionString is: " + connectionString);
  console.log("port is: " + port);
  console.log("Server started listening...");
});
