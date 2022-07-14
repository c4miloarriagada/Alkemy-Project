"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const finance_1 = require("../controllers/finance");
const validator_1 = require("../middlewares/validator");
const jwtvalidator_1 = require("../middlewares/jwtvalidator");
const finance_2 = require("../controllers/finance");
const router = (0, express_1.Router)();
router.get("/", finance_1.getFinances);
router.get("/:id", [jwtvalidator_1.jwtValidator, validator_1.validation], finance_2.getFinancesId);
router.post("/", [
    jwtvalidator_1.jwtValidator,
    (0, express_validator_1.check)("name").not().isEmpty(),
    (0, express_validator_1.check)("type").not().isEmpty(),
    (0, express_validator_1.check)("total").not().isEmpty(),
    validator_1.validation,
], finance_1.postFinance);
router.put("/:id", [jwtvalidator_1.jwtValidator, validator_1.validation], finance_1.financeEdit);
router.delete("/:id", [jwtvalidator_1.jwtValidator, validator_1.validation], finance_1.deleteFinance);
exports.default = router;
//# sourceMappingURL=finance.js.map