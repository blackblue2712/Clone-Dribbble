import React from 'react';

import classes from './App.module.css';
import "./UI/Button/Button.css";
import Header from './Header/Header';
import Footer from './Footer/Footer';

import HiringMain from './Hiring/HiringMain';

class App extends React.Component {

    render() {
        return (
            <div className={classes.App}>
                <Header />
                <main>
                    <HiringMain />
                </main>
                <Footer />
            </div>
        )
    }
}

export default App;