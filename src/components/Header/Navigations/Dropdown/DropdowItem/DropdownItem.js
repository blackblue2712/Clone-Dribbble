import React from 'react';

import classes from './DropdownItem.module.css';

const DropdownItem = props => {
    let classType = classes.DropdownImageContainer;

    switch(props.classType) {
        case 3:
            classType = classes.DropdownImageContainerTri;
            break;
        case 4:
            classType = classes.DropdownImageContainerQuad
            break;
        default:
            break;
    };

    let pro = props.pro ? <span className={classes.Pro}>PRO</span> : "";

    return (
        <li className={classes.DropdownItem + " sub-nav__item"}>
            <a href="shots">
                <div className={classType}>
                    {
                        props.images.map((image, i) => {
                            return <img key={i} src={image} alt="img" />
                        })
                    }
                </div>

                <div>
                <div className={classes.Title} >{props.title} {pro}</div>
                    <p className={classes.Description}>{props.description}</p>
                </div>
            </a>
        </li>
    )
}

export default DropdownItem;