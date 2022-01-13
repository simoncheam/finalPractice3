import React from 'react'

import { useState, useEffect } from 'react';
import { BooksJoined } from '../client_types';
import { APIService } from '../services/APIService';

const Books = () => {


    const [books, setBooks] = useState<BooksJoined[]>([])



    useEffect(() => {

        APIService(`/api/books`)
            .then(data => {

                data = data[0]
                setBooks(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])



    return (
        <div>
            <h1 className="text-primary text-center">Book Detail </h1>


        </div>
    )
}

export default Books
