import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import classes from './App.module.css';
import "./UI/Button/Button.css";
import Header from './Header/Header';
import Footer from './Footer/Footer';

import HiringMain from './Hiring/HiringMain';
import Main from './Main/Main';
import ModalShot from './Modal/ModalShot/ModalShot';

class App extends React.Component {

    render() {
        return (
            <div className={classes.App}>
                <Router>
                    <Header />
                    <main>
                        <Switch>
                            <Route exact path="/" component={Main} />
                            <Route exact path="/hiring" component={HiringMain} />
                            <Route exact path="/modal" component={ModalShot} />
                        </Switch>
                    </main>
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default App;