import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { APIService } from '../services/APIService'

const Login = () => {

    const nav = useNavigate();

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    // login submit button
    const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();


        APIService("/auth/login", 'POST', {

            email: userEmail,
            password: userPassword

        })
            .then(data => {

                alert('Welcome Back!')

                localStorage.setItem('token', data.token)
                nav(`/books`)

            })
            .catch(e => {
                console.log(e)
            })


    }






    return (
        <div>
            <h1 className="text-primary text-center">Login here </h1>



            <main className="container my-5">
                <section className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header"> Welcome back</div>

                            <div className="card-body">
                                <h1>Login here: </h1>
                                <form className="form-group my-2">


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

                                    <button onClick={handleSubmitButton} className='btn btn-primary m-2'>Click to Login</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}

export default Login
