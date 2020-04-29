import React from 'react';

import Logo from '../Logo/Logo';
import NavigationItem from './NavigationItem/NavigationItem';
import CaretDown from '../../UI/Caret/CaretDown';
import Search from '../Search/Search';
import classes from './Navigations.module.css';
import Dropdown from './Dropdown/Dropdown';
import DropdownForDesign from './Dropdown/DropdownForDesign';
import NavMobile from './NavMobile';


import Scs1 from '../../../assets/images/scs-1.png';
import Scs2 from '../../../assets/images/scs-2.jpeg';
import Scs3 from '../../../assets/images/scs-3.jpg';
import Scs4 from '../../../assets/images/scs-4.png';
import Scs5 from '../../../assets/images/scs-5.png';
import Scs6 from '../../../assets/images/scs-6.jpg';
import Scs7 from '../../../assets/images/scs-7.jpg';
import Scs8 from '../../../assets/images/scs-8.png';
import Scs9 from '../../../assets/images/scs-9.png';
import Scs10 from '../../../assets/images/scs-10.png';
import Scs11 from '../../../assets/images/scs-11.png';
import Scs12 from '../../../assets/images/scs-12.png';

import Fds1 from '../../../assets/images/fds-1.png';
import Fds2 from '../../../assets/images/fds-2.png';
import Fds3 from '../../../assets/images/fds-3.png';


const dataDropdownExplore = [
    {
        title: "Shots",
        description: "Get inspired with designs shared by our talented community",
        images: [Scs1, Scs2, Scs3, Scs4]
    },
    {
        title: "Top Designers",
        description: "Check out the rankings and see which designers are trending",
        images: [Scs5]
    },
    {
        title: "Blgos",
        description: "Amazing interviews with design industry leaders, tutorials, and more",
        images: [Scs6, Scs7, Scs8]
    },
    {
        title: "Weekly Warmup",
        description: "Join the fun and flex your design skill with our weekly prompt",
        images: [Scs9]
    },
    {
        title: "Playoffs",
        description: "See Shots that other designers and riffing on & participate yourself",
        images: [Scs10, Scs11, Scs12]
    }
]

const dataDropdownForDesigners = [
    {
        title: "Job Board",
        description: "Find your dream design job on Dribbble",
        images: [Fds1],
        pro: false
    },
    {
        title: "Freelance Projects",
        description: "Exclusive project board perfect for Freelancers and Agencies.",
        images: [Fds2],
        pro: true
    },
    {
        title: "Job Board",
        description: "For Designers & Design Teams, join the worlds best designers on Dribbble.",
        images: [Fds3],
        pro: false
    }
]

const Navigations = props => {
    return (
        <>
            <ul className={classes.Navigations}>
                <NavigationItem link="/"><Logo /></NavigationItem>
                <NavigationItem
                    link="explore"
                    dropdown={<Dropdown dataDropdown={dataDropdownExplore}/>}
                    class="has-child"
                >
                    Explore <CaretDown />
                </NavigationItem>
                <NavigationItem
                    link="/for-designers"
                    dropdown={<DropdownForDesign dataDropdown={dataDropdownForDesigners} />}
                    class="has-child"
                >
                    For Designers <CaretDown />
                </NavigationItem>
                <NavigationItem link="/hiring">Hiring Designers?</NavigationItem>
                <NavigationItem
                    class={"ml-auto"}
                    link="#search"
                >
                    <Search />
                </NavigationItem>
                <NavigationItem link="#sign-in">Sign in</NavigationItem>
                <NavigationItem
                    linkClass="btn btn-primary btn-color-white btn-radius"
                    link="#sign-up"
                >
                    Sign up
                </NavigationItem>
            </ul>

            <NavMobile />
        </>
    )
}

export default Navigations;