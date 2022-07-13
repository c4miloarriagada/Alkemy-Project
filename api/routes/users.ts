import { Router } from "express";
import { check } from "express-validator";
import {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
} from "../controllers/users";
import { validation } from "../middlewares/validator";
import { userExist } from "../helpers/db-validators";
import { jwtValidator } from '../middlewares/jwtvalidator';

const router = Router();

router.get("/", getUsers);

router.get("/:id", [
  jwtValidator,
  check("id").custom(userExist), 
  validation
], getUser);
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
    check("email", "Wrong email").isEmail(),
    validation,
  ],
  postUser
);
router.put("/:id", [
  jwtValidator,
  check("id").custom(userExist),
  validation
], updateUser);
router.delete("/:id", [
  jwtValidator,
  check("id").custom(userExist), 
  validation
], deleteUser);

export default router;
