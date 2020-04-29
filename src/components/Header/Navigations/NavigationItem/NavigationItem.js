import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavigationItem.module.css';
import "./NavigationItem.css";

const NavigationItem = props => {
    return (
        <>
            <li className={[classes.NavigationItem, props.class].join(" ")}>
                <Link
                    to={`${props.link}`}
                    className={props.linkClass}
                >
                    {props.children}
                </Link>
                {props.dropdown}
            </li>
        </>
    )
}

export default NavigationItem;