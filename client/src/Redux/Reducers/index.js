import { combineReducers } from 'redux';
import { user } from './user';
import { cart } from './cart';
import { products } from './products';

export default combineReducers({ user, cart, products });