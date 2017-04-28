"use strict";
/// <reference path="typings/index.d.ts" />
var express = require("express");
var bodyParser = require("body-parser");
var Quote = require("./entities/quote");
var mongoose = require("mongoose");
var restful = require('node-restful');
// =====================
// COMMON VARIABLES
// =====================
//let appPort: number = (process.env.PORT || 1234);
//let connectionString: string = process.env.MONGODB_URI;
var appPort = 1234;
var connectionString = 'mongodb://localhost/express-todo';
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
var port = app.get("port");
var server = app.listen(port, function () {
    // note: Only for debugging purposes to see that your variables are set correctly...
    console.log("connectionString is: " + connectionString);
    console.log("port is: " + port);
    console.log("Server started listening...");
});
//# sourceMappingURL=index.js.map