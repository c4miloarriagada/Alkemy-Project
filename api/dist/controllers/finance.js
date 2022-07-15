"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFinance = exports.financeEdit = exports.postFinance = exports.getFinancesId = exports.getRegisterId = exports.getFinances = void 0;
const finance_1 = __importDefault(require("../models/finance"));
const user_1 = __importDefault(require("../models/user"));
const getFinances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const finances = yield finance_1.default.findAll();
    res.status(201).json(finances);
});
exports.getFinances = getFinances;
const getRegisterId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const finance = yield finance_1.default.findByPk(id);
        if (!finance) {
            return res.status(400).json(`Register with id ${id} doesnt exist`);
        }
        return res.status(201).json(finance);
    }
    catch (err) {
        console.log(err);
        return res.status(400).json(`Contact with the administrator`);
    }
});
exports.getRegisterId = getRegisterId;
const getFinancesId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const finance = yield finance_1.default.findAll({
            order: [['createdAt', 'DESC']],
            where: {
                financeId: id,
                state: true
            },
            include: {
                model: user_1.default
            }
        });
        if (!finance) {
            return res.status(400).json(`Register with id ${id} doesnt exist`);
        }
        return res.status(201).json(finance);
    }
    catch (err) {
        console.log(err);
        return res.status(400).json(`Contact with the administrator`);
    }
});
exports.getFinancesId = getFinancesId;
const postFinance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, type, total, description, id } = req.body;
    try {
        const finance = yield finance_1.default.create({ name, type, total, description });
        const user = yield user_1.default.findByPk(id);
        yield user.addFinance(finance);
        res.status(201).json('Register created succesfully');
    }
    catch (error) {
        console.log(error);
        res.status(500).json(`Contact with the administrator`);
    }
});
exports.postFinance = postFinance;
const financeEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, type, total, description } = req.body;
    try {
        const finance = yield finance_1.default.findByPk(id);
        if (!finance) {
            return res.status(404).json(`Finance doesnt with ${id} exist`);
        }
        yield finance.update({ name, type, total, description });
        res.status(201).json(finance);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(`Contact with the administrator`);
    }
});
exports.financeEdit = financeEdit;
const deleteFinance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const finance = yield finance_1.default.findByPk(id);
    if (!finance) {
        return res.status(404).json(`User with id ${id} doesnt exist`);
    }
    yield finance.update({ state: false });
    res.status(201).json(finance);
});
exports.deleteFinance = deleteFinance;
//# sourceMappingURL=finance.js.map