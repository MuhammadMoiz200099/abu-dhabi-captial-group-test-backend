import { Router } from 'express';
import controller from "./customers.controller";

const router: Router = Router();

router.get('/', controller.getCustomers);
router.post('/', controller.postCustomers);

export default router;
