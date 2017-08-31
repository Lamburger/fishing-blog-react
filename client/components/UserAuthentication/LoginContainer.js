import { connect } from 'react-redux'
import loginStyle from '../../styles/login.css'
import { Component } from 'react'
import { login } from '../../actions'

class LoginScreen extends Component {
    render () {
        let username = ''
        let password = ''
        return(
            <div className="row">    
                <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                    <div className="register">
                        <form onSubmit={ e =>{
                                e.preventDefault()
                                this.props.onLogin(username.value, password.value)
                                username.value = ''
                                password.value = ''
                                this.props.history.push('/')
                            }}>
                            <div>
                                <h2 className="login-heading">Login</h2>
                            </div>
                            <div><input placeholder="Username" className="form-control"
                                ref={input=>username=input}>
                            </input></div>
                            <div><input
                                placeholder="Password" className="form-control"
                                ref={input=>password=input}>
                            </input></div>
                            <button className="btn btn-lg btn-primary valid-button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export const LoginContainer = connect(
    null,
    dispatch => ({
        onLogin(username, password) {
            dispatch(login(username, password))
        }
    })
)(LoginScreen)
