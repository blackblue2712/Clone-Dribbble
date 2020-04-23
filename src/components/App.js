import React from 'react';

import classes from './App.module.css';
import Header from './Header/Header';

class App extends React.Component {

    render() {
        return (
            <div className={classes.App}>
                <Header />
            </div>
        )
    }
}

export default App;