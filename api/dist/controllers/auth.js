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
exports.loginController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const jwtgenerator_1 = require("../helpers/jwtgenerator");
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_1.default.findOne({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(400).json('Email is invalid');
        }
        const validatePassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validatePassword) {
            return res.status(400).json('Invalid password');
        }
        const token = yield (0, jwtgenerator_1.jwtGenerator)(user.id);
        res.json({ user, token });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Contact with the administrator');
    }
});
exports.loginController = loginController;
//# sourceMappingURL=auth.js.map