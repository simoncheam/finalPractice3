import * as express from 'express';
import booksDB from '../../database/queries/books'
import { tokenCheck } from '../../middleware/tokenCheck.mw';


const router = express.Router();


//get all books JOINED

router.get('/', async (req, res) => {

    try {
        const all_books = await booksDB.get_all_joined();

        res.status(200).json(all_books);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }

})


//get one book by id
router.get('/:id', async (req, res) => {

    const id = Number(req.params.id);

    try {
        const one_book = await booksDB.get_one_by_id(id);

        //does user exist check? if/else
        if (!one_book) {
            res.status(400).json({ message: "Book does not exist" })
        }
        res.status(200).json(one_book);


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})




// POST book
router.post('/', async (req, res) => {

    //users
    const { title, author, price, categoryid } = req.body;

    //input validation

    if (!title || !author || !price || !categoryid) {
        return res.status(400).json({ message: "Fill out everything!" })
    }


    try {
        const newbookResults = await booksDB.create({ title, author, price, categoryid });
        res.status(200).json({ message: 'book added', newbookResults });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})




// PUT book
router.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);

        const { title, author, price, categoryid } = req.body;



        const bookUpdateResults = await booksDB.update({ title, author, price, categoryid }, id);

        if (bookUpdateResults.affectedRows) {

            res.status(201).json({ message: "Updated Book!" }); //*tk

        } else {
            res.status(401).json({ message: "Not authorized!" }) //*tk;    
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})




// DELETE book

router.delete('/:id', async (req, res) => {

    const id = Number(req.params.id);


    try {
        await booksDB.destroy(id);
        res.status(200).json({ message: 'book' });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})



export default router;