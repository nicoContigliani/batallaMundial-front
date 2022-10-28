import Reac, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import readToken from '../../../services/tokens/reedToken';

import {
  incrementByAmount, selectLogin, loginAsync, loginOutAsync, selectLoginOut
} from './loginSlice';



const Login = () => {
  const navigate = useNavigate();

  const logins = useSelector(selectLogin);
  const dataItemLocalStorage = readToken()
  useEffect(() => {
    if (
      dataItemLocalStorage?.isAuthenticated
    ) {
      navigate('/')
    }
  }, [])

  if (
    // logins.isAuthenticated 
    // &&
    logins.isAuthenticated === true

  ) {
    navigate('/')
    
  }


  const dispatch = useDispatch();
  const [dataLogin, setDataLogin] = useState()

  const handleInputChange = (e) => {
    e.preventDefault()
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value
    })
  }

  const send = (e) => {
    e.preventDefault()
    // dispatch(incrementByAmount(dataLogin))
    dispatch(loginAsync(dataLogin))

     navigate('/')
 

  }
  const shoot = (e) => {
    e.preventDefault()
    dispatch(loginOutAsync())

  }


  return (
    <div>
      <form onSubmit={send}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
            onChange={handleInputChange} required />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleInputChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


      <div className="btn primary" onClick={shoot}>hola</div>
    </div>
  )
}

export default Login