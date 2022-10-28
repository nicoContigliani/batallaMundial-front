import Reac, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";



import {
  incrementByAmount, selectLogin, registerAsync, loginOutAsync, selectLoginOut
} from './registerSlice';


const Register = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [dataRegister, setDataRegister] = useState()
  const handleInputChange = (e) => {
    e.preventDefault()

    setDataRegister({
      ...dataRegister,
      [e.target.name]: e.target.value
    })
  }

  const send = (e) => {
    e.preventDefault()

    const string1 = dataRegister?.password
    const string2 = dataRegister?.passwordRepit
    const resturnComparePassword = comparePassword(string1, string2)
    if (resturnComparePassword !== 0) {
      alert("Contraseñas no son iguales")
    }
    if (resturnComparePassword == 0) {
      delete dataRegister.passwordRepit
      dispatch(registerAsync(dataRegister))
   

      // navigate('/main')

    }

  }

  const comparePassword = (string1, string2) => {

    return string1.localeCompare(string2)
  }



  return (
    <div>
      <form onSubmit={send}>
        <div className="form-group">
          <label for="exampleInputEmail1">FullName</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter FullName"
            name="fullname" onChange={handleInputChange} required />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
            name="email" onChange={handleInputChange} required />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
            name="password" onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Repite Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Repit Password "
            name="passwordRepit" onChange={handleInputChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Register