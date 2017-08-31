import { NavLink } from 'react-router-dom'
import { Component } from 'react'
import headerStyles from '../../styles/header.css'
import { connect } from 'react-redux'
import { logout } from '../../actions'

class LoggedInBar extends Component {
    render() {
        return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="activeLink" to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="activeLink" to='/addpost'>
                                Add Post
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    <li className=" nav-item">
                            <div className="nav-text">Welcome, {this.props.auth.username}!</div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-button" onClick={this.props.onLogout}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

const LoggedInBarContainer = connect(
    state => ({
        auth: state.auth
    }),
    dispatch => ({
        onLogout() {
            dispatch(logout())
        }
    })
)(LoggedInBar)

export default LoggedInBarContainer
