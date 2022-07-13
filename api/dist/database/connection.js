"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require('dotenv').config();
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const db = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    native: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map