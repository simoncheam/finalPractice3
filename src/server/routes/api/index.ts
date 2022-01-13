import { Router } from 'express'
import books_router from './books';
import categories_router from './categories';

const router = Router();

// ! I need to review syntax for api index


router.use('/books', books_router);
router.use('/categories', categories_router);


export default router;
