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

const router = Router();

router.get("/", getFinances);
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
