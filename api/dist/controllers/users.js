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
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.status(201).json(users);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    console.log(user);
    if (!user) {
        res.status(404).json(`User ${id} doesnt exist.`);
    }
    else {
        res.status(201).json(user);
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const email = yield user_1.default.findOne({
            where: {
                email: body.email,
            },
        });
        if (email) {
            return res.status(400).json(`E-mail already exist ${body.email}`);
        }
        const user = new user_1.default(body);
        yield user.save();
        res.status(201).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(`Server problem, contact admin`);
    }
});
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json(`User with id ${id} doesnt exist`);
        }
        yield user.update(body);
        res.status(201).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(`Server problem, contact admin`);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json(`User with id ${id} doesnt exist`);
    }
    yield user.update({ state: false });
    res.status(201).json(user);
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map