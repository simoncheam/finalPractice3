import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { APIService } from '../services/APIService'

const NewBook = () => {


    const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

    }






    return (
        <div>
            <h1 className="text-primary text-center">Create New Book </h1>




        </div>
    )
}

export default NewBook
