import React, { Component } from 'react';
import Login from '../../Services/services';
import { connect } from 'react-redux';
import { LOG_USER } from '../../Redux/Actions/actionTypes';
import { logUser } from '../../Redux/Actions';

class LoginSignup extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            title: 'Login',
            email: '',
            password: ''
        };
    }

    handleChangeEmail = (mail) => {
        this.setState({
            email: mail.target.value
        });
    }
    
    handleChangePassword = (pass) => {
        this.setState({
            password: pass.target.value
        });
    }

    handleLogin = (event) => {
        event.preventDefault();

        Login(this.state.email, this.state.password)
        .then(res => {
            if(res.statusText === "OK") {
                    this.props.dispatch({ 
                        type: LOG_USER, 
                        payload: {
                            userName: this.state.email,
                            password: this.state.password,
                            loggedin: true
                        }
                    })
                    this.props.history.push("/");
                }   
            }
        )
        .catch(e=>console.log(e));
    }

    render() { 
        return (  
            <>
            <h1>{this.state.title}</h1>
            <form onSubmit={this.handleLogin}>
            <div>
            <input type='text' placeholder='Usuario' name='email' required onChange={this.handleChangeEmail}/>
            </div>
            <div>
            <input type='password' placeholder='Password' name ='password' required onChange={this.handleChangePassword}/>
            </div> 
            <div>
            <button type='submit'>Login</button>
            <a href="/">SignUp?</a>
            </div>
            </form>
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
 
export default connect(mapStateToProps)(LoginSignup);