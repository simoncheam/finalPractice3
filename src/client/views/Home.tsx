import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className=" row justify-content-center ">
            <h1 className="text-primary text-center">Home - welcome </h1>



            {/* add links to register, login, see books */}
            <div className="col-md-6 m-2 ">
                <div className="row justify-content center">

                    <Link to={`/books`} className="row btn btn-warning m-2 ">Books </Link>
                    <Link to={`/register`} className="row btn btn-warning m-2">Register </Link>
                    <Link to={`/login`} className="row btn btn-warning m-2">Login </Link>
                </div>

            </div>

        </div>
    )
}

export default Home
