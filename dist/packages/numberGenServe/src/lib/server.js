"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const numbergen_1 = require("@myorg/numbergen");
const app = (0, express_1.default)();
const port = 8080; // default port to listen
const number = new numbergen_1.NumberGen();
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send(number.getNumber);
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map