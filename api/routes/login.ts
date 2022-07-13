import { Router } from "express";
import { check } from "express-validator";
import { validation } from "../middlewares/validator";
import { loginController } from "../controllers/auth";

const router = Router();

router.post(
  "/",
  [
    check("email", "Email valid is required").isEmail(),
    check("password", "Password is required"),
    validation,
  ],
  loginController
);

export default router;
