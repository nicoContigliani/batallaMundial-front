import React from 'react'
import './Nav.css';
import { NavLink } from "react-router-dom";
import Logout from '../auths/logout/Logout';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark"><h1>Guerra Mundial</h1>
                <div className="container">
                    <NavLink className="btn btn-outline-primary" to="/">
                        home
                    </NavLink>
                    <NavLink className="btn btn-outline-primary" to="/hall">
                        Salón de la Fama
                    </NavLink>
                    <NavLink className="btn btn-outline-primary" to="/player">
                        Jugadores
                    </NavLink>
                    <NavLink className="btn btn-outline-primary" to="/about">
                        About
                    </NavLink>



                    <Logout />

                </div>
            </nav>
        </div>
    )
}

export default Nav

