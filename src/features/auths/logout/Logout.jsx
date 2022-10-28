import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {  incrementByAmount, selectLogin, loginAsync, loginOutAsync, selectLoginOut
} from '../logins/loginSlice'
import { useNavigate } from "react-router-dom";



const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const shoot = (e) => {
        e.preventDefault()
        dispatch(loginOutAsync())
        navigate('/auth')
    
      }
    
    return (
        <div>
            <button type="button" class="btn btn-outline-danger" onClick={shoot}>Logout</button>

        </div>
    )
}

export default Logout