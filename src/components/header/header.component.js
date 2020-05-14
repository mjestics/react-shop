import React from 'react';

import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from './header.styles';
import {signOutStart} from '../../redux/user/user.actions';

const Header = ({currentUser, cartHidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer>
            <OptionLink to='/'>
                <Logo/>
            </OptionLink>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                    <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )
            }
            <OptionDiv>
                <CartIcon/>
            </OptionDiv>
        </OptionsContainer>
        {!cartHidden && (
            <CartDropdown/>
        )}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);