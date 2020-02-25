import React, { Component } from 'react';
import styles from './styles.module.css';
import AddToCart from '../AddToCart';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <article className={styles.item}>
                <div className={styles.imgWrapper}>
                    <img src={this.props.item.photo} alt=""/>
                </div>
                
                <h3>{this.props.item.name}</h3>
                <p>{this.props.item.description}</p>
                <p>Price: ${this.props.item.price}</p>
                <AddToCart item={this.props.item} />
            </article>
        );
    }
}
 
export default Item;