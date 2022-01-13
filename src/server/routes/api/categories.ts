// ✅ OK
import * as express from 'express';
import categoriesDB from '../../database/queries/categories'
import { tokenCheck } from '../../middleware/tokenCheck.mw';

const router = express.Router();


//! get all categories
router.get('/', async (req, res) => {

    try {
        // const results = await DB.get_all();

        const all_categories = await categoriesDB.get_all();

        res.status(200).json(all_categories);


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }

})


//! get one category
router.get('/:id', async (req, res) => {

    const id = Number(req.params.id);

    try {
        // const results = await DB.get_one_by_id();
        const one_category = await categoriesDB.get_one_by_id(id)



        res.status(200).json(one_category);


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})



export default router;


