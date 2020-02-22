import React, { Component } from 'react';
import Login from '../../Services/services';
import { Redirect } from 'react-router-dom';



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
                    const p = this.props;
                    debugger;
                    this.props.history.push("/ProductList");
                    // return <Redirect to="/ProductList" />
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
 
export default LoginSignup;