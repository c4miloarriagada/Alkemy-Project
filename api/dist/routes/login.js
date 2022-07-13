"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validator_1 = require("../middlewares/validator");
const auth_1 = require("../controllers/auth");
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("email", "Email valid is required").isEmail(),
    (0, express_validator_1.check)("password", "Password is required"),
    validator_1.validation,
], auth_1.loginController);
exports.default = router;
//# sourceMappingURL=login.js.map