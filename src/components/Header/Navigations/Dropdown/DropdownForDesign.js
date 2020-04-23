import React from 'react';

import classes from './Dropdown.module.css';
import DropdownItem from './DropdowItem/DropdownItem';

const Dropdown = props => {
    let cls = `${classes.Dropdown} dropdown ${classes.DropdownForDesgin}`;
    return (
        <div className={cls}>
            <ul className={classes.DropdownItems}>
                {
                    props.dataDropdown.map(({title, description, images, href, pro}, i) => {
                        return <DropdownItem
                            key={i}
                            title={title}
                            description={description}
                            images={images}
                            href={href}
                            classType={images.length}
                            pro={pro}
                        />
                    })
                }
                <li>
                    <div className={classes.BgNav}></div>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown;