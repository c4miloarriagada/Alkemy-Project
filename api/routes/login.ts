import { Router } from "express";
import { check } from "express-validator";
import { validation } from '../middlewares/validator';
import { loginController } from '../controllers/auth';


const router = Router()


router.post('/', loginController)







export default router;