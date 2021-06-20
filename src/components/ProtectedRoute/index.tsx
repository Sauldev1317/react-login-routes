import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

interface ProtectedRouteProps {
    component: any
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
    const { component } = props;
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
        
    return (
        <div></div>
    )
}

export default ProtectedRoute
