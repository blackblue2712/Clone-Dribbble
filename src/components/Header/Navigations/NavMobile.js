import React, { useState } from 'react';
import DropdownMobile from './Dropdown/DropdownMobile';

import Logo from '../Logo/Logo';
import Menu from '../../../assets/images/menu.png';
import Close from '../../../assets/images/close.png';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigations.module.css';

const NavMobile = props => {
    const [open, setOpen] = useState("close");

    const toggleMenu = () => {
        setOpen(open === 'close' ? 'open' : 'close' );
    }

    return (
        <ul className={classes.MobileNavigations}>
            <NavigationItem
                link="home"
                dropdown={<DropdownMobile isOpen={open} />}
            >
                <img width="25" height="25" style={{padding: ".1rem"}} onClick={toggleMenu} src={open === "close" ? Menu : Close} alt="menu" />
            </NavigationItem>
            <NavigationItem link="home"><Logo /></NavigationItem>
            <NavigationItem link="home"></NavigationItem>
        </ul>
    )
}

export default NavMobile;