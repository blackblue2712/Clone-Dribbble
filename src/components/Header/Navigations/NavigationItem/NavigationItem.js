import React from 'react';

import classes from './NavigationItem.module.css';
import "./NavigationItem.css";

const NavigationItem = props => {
    return (
        <>
            <li className={[classes.NavigationItem, props.class].join(" ")}>
                <a
                    href={`#${props.link}`}
                    className={props.linkClass}
                >
                    {props.children}
                </a>
                {props.dropdown}
            </li>
        </>
    )
}

export default NavigationItem;