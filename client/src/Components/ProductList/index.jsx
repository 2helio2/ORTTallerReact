import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        if(!this.props.user.loggedin) {
            this.props.history.push('/login');
        }
    }

    render() { 
        return (<>
            <h1>Product list</h1>
        </>);
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
 
export default connect(mapStateToProps)(ProductList);