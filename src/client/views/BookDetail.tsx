import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { BooksJoined, Books, Categories } from '../client_types';
import { APIService } from '../services/APIService';

const BookDetail = () => {

    // ! got stuck here lol // // *tk
    let params = useParams();
    const book_id = params.id


    // console.log(book_id);
    const nav = useNavigate();



    const [book, setBook] = useState<Books>()
    const [category, setCategory] = useState<Categories>()
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {

        APIService(`/api/books/${book_id}`)

            .then(data => {

                setBook(data);
                setIsLoaded(true)

                APIService(`/api/categories/${book.categoryid}`)
                    .then(data => {

                        setCategory(data);
                    })
                    .catch(error => {
                        console.log(error);
                    });

            })
            .catch(error => {
                console.log(error);
            });




    }, [isLoaded])

    if (!book || !category) { return <> Loading...</> }






    return (
        <div>
            <h1 className="text-primary text-center">Book Detail </h1>

            <div className="row justify-content-center m-2">
                <div className="col-md-6">
                    <h1>{book.title}</h1>
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">{category.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{book.author} subtitle</h6>
                            <p className="card-text">price: {book.price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })}.</p>
                            <button onClick={() => nav(-1)} className="row btn btn-primary m-2">Go Back </button>
                            <Link to={`/books/${book_id}/update`} className="row btn btn-warning m-2">Edit </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookDetail
