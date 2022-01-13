import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Categories } from '../client_types';
import { APIService } from '../services/APIService'

const NewBook = () => {
    const nav = useNavigate();


    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookPrice, setBookPrice] = useState<number>(null)
    const [categories, setCategories] = useState<Categories[]>([])
    const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0)


    useEffect(() => {

        //API categories
        APIService(`/api/categories`)
            .then(data => {

                setCategories(data);
            })
            .catch(error => {
                console.log(error);
            });




    }, [])


    const handleCategoryIdSelectUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        setSelectedCategoryId(Number(e.target.value))

    }




    const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        APIService("/api/books", 'POST', {
            title: bookTitle,
            author: bookAuthor,
            price: bookPrice,
            categoryid: selectedCategoryId

        })
            .then(data => {

                alert('Good book!')

                nav(`/books`)

            })
            .catch(e => {
                console.log(e)
            })





    }



    if (!categories) { return <> Loading...</> }



    return (
        <div>
            <h1 className="text-primary text-center">Create New Book </h1>

            <main className="container my-5">
                <section className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header"> Header Title</div>

                            <div className="card-body">
                                <h1>Create your Book: </h1>
                                <form className="form-group my-2">

                                    {/* add select menu */}
                                    <label>Category:</label>
                                    <select value={selectedCategoryId} onChange={handleCategoryIdSelectUpdate} className='form-control'>


                                        <option value={0} >Select a Category </option>


                                        {categories.map(cat => (


                                            <option key={`category-${cat.id}-${cat.name}`} value={cat.id}>
                                                {cat.name}
                                            </option>

                                        ))}
                                    </select>




                                    <label>Title:</label>
                                    <input type='text'
                                        value={bookTitle}
                                        placeholder='book title'
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookTitle(e.target.value)}

                                        className="form-control" />

                                    <label>Author:</label>
                                    <input type='text'
                                        value={bookAuthor}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookAuthor(e.target.value)}

                                        placeholder='author name'
                                        className="form-control" />

                                    <label>Price:</label>
                                    <input type='number'
                                        value={bookPrice}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPrice(Number(e.target.value))}

                                        placeholder='text'
                                        className="form-control" />

                                    <button onClick={handleSubmitButton} className='btn btn-primary m-2'>create book</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>




        </div>
    )
}

export default NewBook
