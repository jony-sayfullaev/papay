console.log("Web Server boshlash");
const express = require("express");
const app = express();
// MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");

//1. Entry
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session

// Views
app.set("views", "views");
app.set("views engine", "ejs");
// Routing

module.exports = app;
