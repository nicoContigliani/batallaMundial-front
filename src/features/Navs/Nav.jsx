import React from 'react'
import './Nav.css';
import { NavLink } from "react-router-dom";
import Logout from '../auths/logout/Logout';

const Nav = () => {
    return (
        <div className='navBar'>
            <div className='container-fluid'>
 <Logout />
                <nav className="navbar-brand"><h1>Guerra Mundial</h1>
                    <div className="container">
                        <NavLink className="btn " to="/">
                            home
                        </NavLink>
                        <NavLink className="btn " to="/hall">
                            Salón de la Fama
                        </NavLink>
                        <NavLink className="btn " to="/player">
                            Jugadores
                        </NavLink>
                        <NavLink className="btn " to="/about">
                            About
                        </NavLink>

                       

                    </div>
                </nav>
            </div>


         
        </div>
    )
}

export default Nav

