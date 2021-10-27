import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import Menu from './Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <div className='Header'>
            <Logo />
            <Menu />
            <HeaderProfile />
        </div>
    );
};

export default Header;