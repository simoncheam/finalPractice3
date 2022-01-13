import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    useEffect(() => {

        //API stuff

    }, [])



    return (




        <div>
            <Link className='btn btn-primary m-2' to='/'>Home</Link>
            <Link className='btn btn-primary m-2' to='/register'>Register</Link>
            <Link className='btn btn-primary m-2' to='/login'>Login</Link>

        </div>
    )
}

export default Navbar

