import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { APIService } from '../services/APIService'

const Register = () => {
    const nav = useNavigate();

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')


    const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();


        APIService("/auth/register", 'POST', {
            name: userName,
            email: userEmail,
            password: userPassword

        })
            .then(data => {

                alert('Welcome!')

                localStorage.setItem('token', data.token)
                nav(`/books`)

            })
            .catch(e => {
                console.log(e)
            })


    }




    return (
        <div>
            <h1 className="text-primary text-center">Register </h1>

            <div>



                <main className="container my-5">
                    <section className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card shadow">
                                <div className="card-header"> Header Title</div>

                                <div className="card-body">
                                    <h1>Create your account to get started: </h1>
                                    <form className="form-group my-2">
                                        <label>Username:</label>
                                        <input type='text'
                                            value={userName}
                                            placeholder='username'
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}

                                            className="form-control" />

                                        <label>Email:</label>
                                        <input type='text'
                                            value={userEmail}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value)}

                                            placeholder='email'
                                            className="form-control" />

                                        <label>Password:</label>
                                        <input type='password'
                                            value={userPassword}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value)}

                                            placeholder='password'
                                            className="form-control" />

                                        <button onClick={handleSubmitButton} className='btn btn-primary m-2'>Register Here</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>




            </div>

        </div>
    )
}

export default Register
