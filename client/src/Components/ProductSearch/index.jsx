import React, { Component } from 'react';
import styles from './styles.module.css';


class ProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return (
        <section>
            <input type="text" placeholder="Buscar..." className={styles.inputFilter} onChange={(event)=>this.props.filterProducts(event)}/>
         </section>);
    }
}
 
export default ProductSearch;