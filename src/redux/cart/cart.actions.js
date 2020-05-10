import {CartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: null
});

export const addItemToCart = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

