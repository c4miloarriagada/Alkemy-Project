"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtGenerator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtGenerator = (id = '') => {
    return new Promise((resolve, rejects) => {
        const payload = { id };
        jsonwebtoken_1.default.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '368d',
        }, (err, token) => {
            if (err) {
                console.log(err);
                rejects('Token can be generated');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.jwtGenerator = jwtGenerator;
//# sourceMappingURL=jwtgenerator.js.map