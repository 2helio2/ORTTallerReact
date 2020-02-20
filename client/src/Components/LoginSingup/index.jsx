import React, { Component } from 'react';

class LoginSignup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: 'Login'
        }
    }
    render() { 
        return (  
            <>
            <h1>{this.state.title}</h1>
            </>
        );
    }
}
 
export default LoginSignup;