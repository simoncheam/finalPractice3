import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import { APIService } from '../services/APIService'

const PrivateWrapper = ({ children }: PrivateRouteProps) => {

    const [isAuthed, setIsAuthed] = useState(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);


    useEffect(() => {

        APIService('/auth/validate')
            .then(res => {

                const tokenStatus = res.message === 'valid';
                console.log({ tokenStatus });
                setIsAuthed(tokenStatus)
                setIsLoaded(true)

            })
            .catch(e => {
                console.log(e)
                setIsLoaded(true)
                setIsAuthed(false)
            })

    }, [])


    if (!isLoaded) { return <> Loading...</> }

    if (!isAuthed) {
        return <Navigate to='/login' />
    } else {

        return (
            <div>
                <h1 className="text-primary text-center">Private Wrapper </h1>

                {children}

                <Outlet />


            </div>
        )

    }


}

interface PrivateRouteProps {
    path?: string,
    exact?: boolean,
    children?: React.ReactNode;
}

export default PrivateWrapper
