import React from 'react';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {addItemToCart} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';


const CollectionItem = ({item, addItemToCart}) => {
    const {name, price, imageUrl } = item;
    return (<div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl}`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className={'price'}>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItemToCart(item)}>ADD TO CART</CustomButton>
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
});


export default connect(null, mapDispatchToProps)(CollectionItem);