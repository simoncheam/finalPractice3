// ! I need to review this structure
import { Router } from 'express'

import apiRouter from './api'
import authRouter from './auth'

const router = Router();

router.use('/api', apiRouter)  //dont forget this syntax //! Need place name!
router.use('/auth', authRouter)

export default router;

