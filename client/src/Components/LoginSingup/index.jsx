import React, { Component } from 'react';
import { Login } from '../../Services/services';
import { signUp} from '../../Services/services';
import { connect } from 'react-redux';
import { LOG_USER } from '../../Redux/Actions/actionTypes';
import Message from '../Message';

class LoginSignup extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            title: 'Login',
            email: '',
            password: '',
            message: '',
            color:''
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

    goToSignUp=(event)=>{
        event.preventDefault();
        this.setState({
            title: 'SignUp'
        })

    }

    goToLogin=(event)=>{
        event.preventDefault();
        this.setState({
            title: 'Login'
        })

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
                    console.log(res);
                    this.props.history.push("/");
                }   
            }
        )
        .catch(e=> {this.setState({
                    color:'red',
                    message: 'contraseña o usuario incorrecto'
                })
            });
    }

    handleSignUp = (event) => {
        event.preventDefault();
        signUp(this.state.email, this.state.password)
        .then(res => {
            if(res.status === 200) {
                    this.props.dispatch({ 
                        type: LOG_USER, 
                        payload: {
                            userName: this.state.email,
                            password: this.state.password,
                            loggedin: true
                        }
                    })
                    console.log(res);
                    this.setState({
                        color:'green',
                        message: 'Usuario creado correctamente'
                    });
                }   
            }
        )
        .catch(res=> {this.setState({
                    color:'red',
                    message: 'Error al crear usuario'
                })
                console.log(res);
            });
    }

    render() { 
        return (  
            <>
            <h1>{this.state.title}</h1>
            <form onSubmit={this.state.title === 'Login'?this.handleLogin:this.handleSignUp}>
            <div>
            <input type='text' placeholder='Usuario' name='email' required onChange={this.handleChangeEmail}/>
            </div>
            <div>
            <input type='password' placeholder='Password' name ='password' required onChange={this.handleChangePassword}/>
            </div> 
            <div>
            {this.state.title === 'Login' ?
            <>
                <button type='submit'>Login</button>
                <a href=""onClick={this.goToSignUp}>SignUp?</a>
                </>
                :
                <>
                <button type='submit'>SignUp</button>
                <a href=""onClick={this.goToLogin}>Login</a>
                </>
            }
            </div>
            </form>
            <Message color={this.state.color} message={this.state.message}/>
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