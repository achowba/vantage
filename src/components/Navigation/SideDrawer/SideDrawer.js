import Menu from '../Menu/Menu';
import CTA from '../CTA/CTA';
import Logo from '../../UI/Logo/Logo';

import classes from './SideDrawer.module.css';

const sideDrawer = () => {
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.Links}>
                <Menu/>
            </nav>
            <div className={classes.CTA}>
                <CTA/>
            </div>
        </div>
    )
}

export default sideDrawer;
