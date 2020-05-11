import React from 'react';
import {addItemToCart, clearItemFromCart, removeItem} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;

    return (<div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={() => clearItem(cartItem)} className='remove-button'>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
