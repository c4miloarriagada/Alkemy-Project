"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Finance = connection_1.default.define('finances', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: sequelize_1.DataTypes.ENUM({
            values: ['sum', 'sub']
        }),
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    }
});
exports.default = Finance;
//# sourceMappingURL=finance.js.map