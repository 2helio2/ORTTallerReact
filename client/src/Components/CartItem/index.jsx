import React, { Component } from 'react';
import styles from './styles.module.css';

class CartItem extends Component {
    render() { 
        return (<>
            <article className={styles.CartItem}>
                <div>
                    {this.props.name}
                </div>
                <div>
                    {this.props.count}
                </div>
                <div>
                    <button onClick={()=> this.props.deleteCartItem(this.props.id)}>X</button>
                </div>                
            </article>
            
        </>);
    }
}
 
export default CartItem;