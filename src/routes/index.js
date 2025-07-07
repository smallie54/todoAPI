import { Router } from "express";
import taskRoutes from './taskRoutes.js'
import userRoutes from './userRoutes.js'

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API');
});
router.use('/api/tasks', taskRoutes)

router.use('/api/users', userRoutes)






export default router;
