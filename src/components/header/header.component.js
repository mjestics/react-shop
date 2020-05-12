import React from 'react';

import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from './header.styles';

const Header = ({currentUser, cartHidden}) => (
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
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
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
    cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);