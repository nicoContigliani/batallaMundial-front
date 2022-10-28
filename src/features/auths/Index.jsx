import React, { useState } from 'react'
import Login from './logins/Login'
import Register from './registers/Register'
const Index = () => {
    const [register, setRegister] = useState(false)

    const changeT = () => {
        setRegister(true)
    }
    const changeF = () => {
        setRegister(false)
    }


    return (
        <div>
            <br /><br /><br />
            {
                (register) ? (

                    <div className="container">

                        <div className="card">
                            {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
                            <div className="card-body">
                                <h5 className="card-title">Register</h5>
                                <Register />

                            </div>
                        </div>
                    </div>


                ) : (
                    <div className="container">

                        <div className="card">
                            {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
                            <div className="card-body">
                                <h5 className="card-title">Login</h5>
                                <Login />
                            </div>
                        </div>
                    </div>

                )
            }

            <br />
            <div className="container">
                <button type="button" class="btn btn-outline-primary" onClick={changeF} >Login</button>
                <button type="button" class="btn btn-outline-info" onClick={changeT}>Register</button>

            </div>



        </div>





    )
}

export default Index