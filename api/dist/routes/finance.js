"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const finance_1 = require("../controllers/finance");
const router = (0, express_1.Router)();
router.post('/', finance_1.postFinance);
exports.default = router;
//# sourceMappingURL=finance.js.map