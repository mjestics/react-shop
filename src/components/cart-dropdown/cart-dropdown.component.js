import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import './cart-dropdown.styles.scss';
import {withRouter} from 'react-router-dom';

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        {
            cartItems.length
                ? (<div className='cart-items'>
                        {
                            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                        }
                    </div>
                ) : (
                    <span className='empty-message'>CART EMPTY</span>
                )}
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));