import React from 'react';

import classes from './Dropdown.module.css';
import DropdownItem from './DropdowItem/DropdownItem';
import DropdownItemNav from './DropdowItem/DropDownItemNav';

const Dropdown = props => {
    return (
        <div className={classes.Dropdown + " dropdown"}>
            <ul className={classes.DropdownItems}>
                {
                    props.dataDropdown.map(({title, description, images, href}, i) => {
                        return <DropdownItem
                            key={i}
                            title={title}
                            description={description}
                            images={images}
                            href={href}
                            classType={images.length}
                        />
                    })
                }

                <DropdownItemNav />
                <li>
                    <div className={classes.BgNav}></div>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown;