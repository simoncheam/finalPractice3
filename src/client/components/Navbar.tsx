import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { APIService } from '../services/APIService';

const Navbar = () => {

    const [isAuthed, setIsAuthed] = useState<boolean>(false)

    useEffect(() => {

        //API stuff
        APIService(`/auth/validate`)
            .then(res => {

                const tokenStatus = res.message === 'valid'

                setIsAuthed(tokenStatus);
            })
            .catch(error => {
                console.log(error);
            });

    }, [])



    return (




        <div>
            <Link className='btn btn-primary m-2' to='/'>Home</Link>
            <Link className='btn btn-primary m-2' to='/register'>Register</Link>
            <Link className='btn btn-primary m-2' to='/login'>Login</Link>
            {isAuthed &&
                <Link className='btn btn-primary m-2' to='/books/new'>Create book</Link>
            }

        </div>
    )
}

export default Navbar

