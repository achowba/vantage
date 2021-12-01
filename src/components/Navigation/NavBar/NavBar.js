import React from 'react';

import classes from './NavBar.module.css';
import Menu from '../Menu/Menu';
import Logo from '../../UI/Logo/Logo';
import CTA from '../CTA/CTA';

const navbar = () => (
    <div className={classes.NavBar}>
        <Logo />
        <div className={classes.Menu}>
            <Menu />
        </div>
        <div className={classes.CTA}>
            <CTA/>
        </div>
    </div>
);

export default navbar;
