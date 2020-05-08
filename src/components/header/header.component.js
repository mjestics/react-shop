import React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'>
                <Logo/>
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
);

export default Header;