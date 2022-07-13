"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const finance_1 = __importDefault(require("./finance"));
user_1.default.hasMany(finance_1.default, { foreignKey: 'financeId' });
finance_1.default.belongsTo(user_1.default, { foreignKey: 'financeId' });
//# sourceMappingURL=association.js.map