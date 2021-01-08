import React from 'react';

import './NavBar.css';
import Menu from './Menu/Menu';
import Brand from './Brand/Brand';
import Button from '../Button/Button';
import LinkItem from '../LinkItem/LinkItem';

import logo from '../../containers/logo.svg';

const navbar = () => (
    <div className="NavBar">
        <Brand logo={logo}/>
        <Menu/>
        <div className="CTA">
            <LinkItem name='Login' url='#'/>
            <Button type="primary">Get Started</Button>
        </div>
    </div>
);

export default navbar;
