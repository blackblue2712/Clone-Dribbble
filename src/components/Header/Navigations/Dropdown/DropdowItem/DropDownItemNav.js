import React from 'react';

import classes from './DropdownItem.module.css';

const DropdownItemNav = props => {
    return (
        <li>
            <ul className={classes.DropdownItemNav}>
                <li>
                    <a href="#teams">Teams</a>
                </li>
                <li>
                    <a href="#teams">Goods for Sale</a>
                </li>
                <li>
                    <a href="#teams">Meetups</a>
                </li>
                <li>
                    <a href="#teams">Dribbble Shop</a>
                </li>
                <li>
                    <a href="#teams">About Dribbble</a>
                </li>
                <li>
                    <a href="#teams">Advertise</a>
                </li>
                <li>
                    <a href="#teams">Playoffs</a>
                </li>
            </ul>
        </li>
    )
}

export default DropdownItemNav;