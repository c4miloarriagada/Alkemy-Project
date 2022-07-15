import { Router } from "express";
import { check } from "express-validator";
import {
  postFinance,
  getFinances,
  financeEdit,
  deleteFinance,
} from "../controllers/finance";
import { validation } from "../middlewares/validator";
import { jwtValidator } from "../middlewares/jwtvalidator";
import { getFinancesId, getRegisterId } from '../controllers/finance';

const router = Router();

router.get("/", getFinances);
router.get("/:id", [jwtValidator, validation], getFinancesId);
router.get('/edit/:id',  [jwtValidator, validation], getRegisterId);
router.post(
  "/",
  [
    jwtValidator,
    check("name").not().isEmpty(),
    check("type").not().isEmpty(),
    check("total").not().isEmpty(),
    validation,
  ],
  postFinance
);
router.put("/:id", [jwtValidator, validation], financeEdit);
router.delete("/:id", [jwtValidator, validation], deleteFinance);

export default router;
