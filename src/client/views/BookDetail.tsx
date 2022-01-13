import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { BooksJoined, Books, Categories } from '../client_types';
import { APIService } from '../services/APIService';

const BookDetail = () => {

    const book_id = useParams();
    const nav = useNavigate();


    const [book, setBook] = useState<Books>()
    const [category, setCategory] = useState<Categories>()

    useEffect(() => {

        APIService(`/api/books/${book_id}`)
            .then(data => {

                setBook(data);

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






    }, [])

    if (!book || !category) { return <> Loading...</> }




    return (
        <div>
            <h1 className="text-primary text-center">Book Detail </h1>

            <div className="row justify-content-center m-2">
                <div className="col-md-6">
                    <h1>{ }</h1>
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
