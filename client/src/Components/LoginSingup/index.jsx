import React, { Component } from 'react';
import { Login } from '../../Services/services';
import { signUp} from '../../Services/services';
import { connect } from 'react-redux';
import { LOG_USER } from '../../Redux/Actions/actionTypes';
import Loader from '../Loader';
import Message from '../Message';
import styles from './styles.module.css';


class LoginSignup extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            title: 'Login',
            email: '',
            password: '',
            message: '',
            color:'',
            loading: false
        };
    }

    handleChange = (input, inputName) => {
        this.setState({
            [inputName]: input.target.value
        });
    }
    
    goToSignUp = (event) => {
        event.preventDefault();
        this.setState({
            title: 'Sign Up'
        })

    }

    goToLogin = (event) => {
        event.preventDefault();
        this.setState({
            title: 'Login'
        })

    }

    handleLogin = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })

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
        .catch(e=> {this.setState({
                    color:'red',
                    message: 'contraseña o usuario incorrecto',
                    loading: false
                })
            });
    }

    handleSignUp = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })

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

                this.setState({
                    color:'green',
                    message: 'Usuario creado correctamente',
                    title: 'Login',
                    userName: this.state.email,
                    password: this.state.password,
                    loading: false
                });
            }   
        })
        .catch(e => {
            this.setState({
                color:'red',
                message: 'Error al crear usuario',
                loading: false
            });
        });
    }

    render() { 
        return ( 
            <> 
            <section className={styles.loginForm}>
                <h1>{this.state.title}</h1>
                <form onSubmit={this.state.title === 'Login'?this.handleLogin:this.handleSignUp}>
                    <div>
                        <input 
                            className={styles.input} 
                            type='text' 
                            placeholder='Usuario' 
                            name='email' 
                            onChange={(event)=> this.handleChange(event, `email`)}
                            required />
                    </div>
                    <div>
                        <input 
                            className={styles.input} 
                            type='password' 
                            placeholder='Password' 
                            name='password' 
                            onChange={(event)=> this.handleChange(event, `password`)}
                            required />
                    </div> 
                    <div className={styles.actions}>
                        {this.state.title === 'Login' ?
                            <>
                                <button className={styles.btnPrimary} type='submit'>Login</button>
                                <button className={styles.btnLink} onClick={this.goToSignUp}>Create a new account</button>
                            </>
                            :
                            <>
                                <button className={styles.btnPrimary} type='submit'>Sign Up</button>
                                <button className={styles.btnLink} onClick={this.goToLogin}>I have an account</button>
                            </>
                        }
                    </div>
                </form>
                
                <Message color={this.state.color} message={this.state.message}/>
            </section>
            {this.state.loading ? <Loader /> : <></>}
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