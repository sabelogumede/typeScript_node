"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Messager {
    constructor(port) {
        this.port = port;
    }
    messagePrint() {
        return `Node and express server is running on port ${this.port}`;
    }
}
exports.default = Messager;
