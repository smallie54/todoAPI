import { Router } from "express";
import taskRoutes from './taskRoutes.js'
import userRoutes from './userRoutes.js'

const router = Router();


router.use('/api/tasks', taskRoutes)

router.use('/api/users', userRoutes)






export default router;
