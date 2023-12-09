"use strict";
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const PORT = 5000;
mongoose.connect(`mongodb+srv://philip_faerber:Test_1234@cluster0.kw55p1b.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    app.listen(PORT, () => {
        console.log("App is listening on Port" + PORT);
    }).catch((err) => { console.log(err); });
});
