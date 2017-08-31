import { NavLink } from 'react-router-dom'
import { Component } from 'react'
import headerStyles from '../../styles/header.css'

const LoggedOutBar = () =>
        <nav className="navbar navbar-default">
            <div className="container">
                
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="activeLink" to='/'>
                            Home
                        </NavLink>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="activeLink" to='/login'>
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="activeLink" to='/register'>
                            Register
                        </NavLink>
                    </li>
                </ul>
            </div>
            
        </nav>

export default LoggedOutBar
