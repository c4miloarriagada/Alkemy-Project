"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_1 = require("../controllers/users");
const validator_1 = require("../middlewares/validator");
const db_validators_1 = require("../helpers/db-validators");
const jwtvalidator_1 = require("../middlewares/jwtvalidator");
const router = (0, express_1.Router)();
router.get("/", users_1.getUsers);
router.get("/:id", [
    jwtvalidator_1.jwtValidator,
    (0, express_validator_1.check)("id").custom(db_validators_1.userExist),
    validator_1.validation
], users_1.getUser);
router.post("/", [
    (0, express_validator_1.check)("name", "Name is required").not().isEmpty(),
    (0, express_validator_1.check)("password", "Password is required").not().isEmpty(),
    (0, express_validator_1.check)("email", "Wrong email").isEmail(),
    validator_1.validation,
], users_1.postUser);
router.put("/:id", [
    jwtvalidator_1.jwtValidator,
    (0, express_validator_1.check)("id").custom(db_validators_1.userExist),
    validator_1.validation
], users_1.updateUser);
router.delete("/:id", [
    jwtvalidator_1.jwtValidator,
    (0, express_validator_1.check)("id").custom(db_validators_1.userExist),
    validator_1.validation
], users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map