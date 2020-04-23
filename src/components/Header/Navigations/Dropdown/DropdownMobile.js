import React, { useState } from 'react';
import "./DropdownMobile.css";
import Caret from '../../../UI/Caret/CaretDownBold';

const DropdownMobile = props => {
    const [openEx, setOpenEx] = useState("close");
    const [openFDS, setopenFDS] = useState("close");
    
    return (
        <div className={`DropdownMobile ${props.isOpen}`} >
            <ul className="DropdownMobile__items">
                <li
                    className={`DropdownMobile__item ${openEx}`}
                    onClick={() => setOpenEx(openEx === "close" ? "open" : "close")}
                >
                    <a href="#explore"><span>Explore</span> <Caret /></a>
                    <ul className="DropdownMobile-sub__items">
                        <li className="DropdownMobile-sub__item">
                            <a href="#shots">Shots</a>
                        </li>
                        <li className="DropdownMobile-sub__item">
                            <a href="#top">Top Designers</a>
                        </li>
                        <li className="DropdownMobile-sub__item">
                            <a href="#blogs">Blogs</a>
                        </li>
                        <li className="DropdownMobile-sub__item">
                            <a href="#Weekly Warm-up">Weekly Warm-up</a>
                        </li>
                        <li className="DropdownMobile-sub__item">
                            <a href="#Playoffs">Playoffs</a>
                        </li>
                        <li className="DropdownMobile-sub__item">
                            <a href="#more">More</a>
                        </li>
                    </ul>
                </li>
                <li
                    className={`DropdownMobile__item ${openFDS}`}
                    onClick={() => setopenFDS(openFDS === "close" ? "open" : "close")}
                >
                    <a href="#for-design">For Designers <Caret /></a>
                    <ul className="DropdownMobile-sub__items">
                        <li className="DropdownMobile-sub__item">
                            <a href="#Job Board">Job Board</a>
                        </li>
                        <li className="DropdownMobile-sub__item">
                            <a href="#freelace">Freelace Projects</a>
                        </li>
                        <li className="DropdownMobile-sub__item">
                            <a href="#Go Pro">Go Pro</a>
                        </li>
                    </ul>
                </li>
                <li className="DropdownMobile__item">
                    <a href="#hiring">Hiring Desiginers?</a>
                </li>
            </ul>
        </div>
    )
}

export default DropdownMobile;