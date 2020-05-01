import React from 'react';

import BackToTop from '../../assets/images/icon-backtotop.png';
import classes from './Footer.module.css';

class ScrollToTop extends React.Component {
    state = {
        show: false
    }

    isShowScrollToTop = () => {
        if(window.pageYOffset > 500 && !this.state.show) {
            this.setState({ show: true });
        } else if(window.pageYOffset < 500) {
            this.setState({ show: false });
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.isShowScrollToTop);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.isShowScrollToTop);
    }

    render() {
        return this.state.show ? (
            <div className={classes.ScrollToTop}>
                <a href="#top">
                    <img src={BackToTop} alt="back-to-top" />
                </a>
            </div>
        ): null
    }
}

export default ScrollToTop;