import React from 'react';

import classes from './App.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends React.Component {

    render() {
        return (
            <div className={classes.App}>
                <Header />
                <main>Main</main>
                <Footer />
            </div>
        )
    }
}

export default App;