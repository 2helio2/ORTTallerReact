import React, { Component } from 'react';
import Item from '../Item';
import styles from './styles.module.css';

class ItemsCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <section className={styles.itemsCollection}>
                {this.props.items ? this.props.items.map(item => 
                    <Item key={item._id} item={item} />
                ): 'loading'}
            </section>
        );
    }
}
 
export default ItemsCollection;