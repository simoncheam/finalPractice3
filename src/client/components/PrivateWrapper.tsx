import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { APIService } from '../services/APIService'

const PrivateWrapper = ({ children }: PrivateRouteProps) => {

    const [isAuthed, setIsAuthed] = useState(false)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)



    useEffect(() => {

        APIService('/auth/validate')
            .then(res => {

                const tokenStatus = res.message === 'valid';
                console.log({ tokenStatus });
                setIsAuthed(tokenStatus)

            })
            .catch(e => {
                console.log(e)
                setIsAuthed(false)
            })

    }, [])





    return (
        <div>
            <h1 className="text-primary text-center">Private Wrapper </h1>

            {children}

            <Outlet />


        </div>
    )
}

interface PrivateRouteProps {
    path?: string,
    exact?: boolean,
    children?: React.ReactNode;
}

export default PrivateWrapper
