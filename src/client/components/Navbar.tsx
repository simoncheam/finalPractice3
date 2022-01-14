import e from 'express';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { Link, useNavigate } from 'react-router-dom'
import { APIService } from '../services/APIService';

const Navbar = () => {

    const nav = useNavigate();
    const loc = useLocation();

    const [isAuthed, setIsAuthed] = useState<boolean>(false)

    useEffect(() => {

        //API stuff
        APIService(`/auth/validate`)
            .then(res => {

                const tokenStatus = res.message === 'valid'

                setIsAuthed(tokenStatus);

            })
            .catch(error => {
                setIsAuthed(false)
                console.log(error);
            });

    }, [loc.pathname])


    const handleSignOutButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.removeItem('token');
        alert('you are now signed out')
        nav('/login');
    }


    return (




        <div>
            <Link className='btn btn-primary m-2' to='/'>Home</Link>
            <Link className='btn btn-primary m-2' to='/register'>Register</Link>
            <Link className='btn btn-primary m-2' to='/login'>Login</Link>
            {isAuthed &&
                <Link className='btn btn-primary m-2' to='/books/new'>Create book</Link>
            }
            {isAuthed &&

                <button onClick={handleSignOutButton} className='btn btn-primary m-2'>Sign Out</button>
            }
        </div>
    )
}

export default Navbar

