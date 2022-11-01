"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const numberGen_1 = require("../../numberGen/app/numberGen");
const app = express();
const port = 8080; // default port to listen
const number = new numberGen_1.NumberGen();
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send(number.getNumber);
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map