import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router';

export const PrivateRoute = ({ children }) => {
    const isAuth = useSelector(state => state.regReducer.isAuth);
    console.log(isAuth);
    const location=useLocation()
    // const navigate = useNavigate();

    if (!isAuth) {
        return <Navigate to="/login" state={{from:location}}/>
        // navigate("/login",{replace:true});
    }
    return (
        children
  )
}
