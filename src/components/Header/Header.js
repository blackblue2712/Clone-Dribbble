import React from 'react';
import Navigations from './Navigations/Navigations';

import classes from './Header.module.css';
class Header extends React.Component {

    render() {
        return (
            <header className={classes.Header}>
                <div className={classes.Inner}>
                    <Navigations />
                </div>
            </header>
        )
    }
}

export default Header;