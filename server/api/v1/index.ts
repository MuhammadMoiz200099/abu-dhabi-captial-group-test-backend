import { Router } from 'express';
import customersRouter from "./customers";
const router: Router = Router();

router.use('/customers', customersRouter);

export default router;
