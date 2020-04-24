import React from 'react';

import Logo from '../../../assets/images/logo.png';
import classes from './Logo.module.css';

export default function logo(props) {

    return (
        <img className={classes.Logo} src={Logo} alt="logo" />
    )
}
