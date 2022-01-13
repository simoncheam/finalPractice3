import React from 'react'
import { Outlet } from 'react-router'

const PrivateWrapper = () => {


    return (
        <div>
            <h1 className="text-primary text-center">Private Wrapper </h1>

            <Outlet />


        </div>
    )
}

export default PrivateWrapper
