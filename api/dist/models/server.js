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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("../routes/users"));
const login_1 = __importDefault(require("../routes/login"));
const finance_1 = __importDefault(require("../routes/finance"));
const connection_1 = __importDefault(require("../database/connection"));
require("./association");
class Server {
    constructor() {
        this.paths = {
            users: '/api/users',
            login: '/api/login',
            finance: '/api/finance'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.sync({ force: false });
                console.log('===================');
                console.log('Data Base Connected');
                console.log('===================');
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.paths.users, users_1.default);
        this.app.use(this.paths.login, login_1.default);
        this.app.use(this.paths.finance, finance_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server listening at port ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map