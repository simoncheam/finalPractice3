import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Categories } from '../client_types';
import { APIService } from '../services/APIService';

const Update = () => {

    const nav = useNavigate();
    let params = useParams();
    const book_id = params.id



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




    return (
        <div>
            <h1 className="text-primary text-center">Edit Book </h1>


        </div>
    )
}

export default Update

