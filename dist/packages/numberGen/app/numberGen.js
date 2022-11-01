"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberGen = void 0;
class NumberGen {
    constructor() {
        this.floor = 0;
        this.maximum = 1000;
    }
    getNumber() {
        return this.floor + Math.random() * this.maximum;
    }
}
exports.NumberGen = NumberGen;
//# sourceMappingURL=numberGen.js.map