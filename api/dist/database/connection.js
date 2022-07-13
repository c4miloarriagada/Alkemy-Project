"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user_1 = __importDefault(require("../models/user"));
const finance_1 = __importDefault(require("../models/finance"));
user_1.default.belongsToMany(finance_1.default, { through: 'User_finances' });
finance_1.default.belongsTo(user_1.default);
const db = new sequelize_1.Sequelize('alkemy-project', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    //loggin: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map