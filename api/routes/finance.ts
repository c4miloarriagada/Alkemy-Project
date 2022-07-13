import { Router } from "express";
import { postFinance } from '../controllers/finance';




const router = Router()


router.post('/', postFinance)







export default router;