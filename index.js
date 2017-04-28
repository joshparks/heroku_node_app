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
var appPort = (process.env.PORT || 5000);
var connectionString = (process.env.MONGODB_URI || 'mongodb://localhost/express-todo');
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