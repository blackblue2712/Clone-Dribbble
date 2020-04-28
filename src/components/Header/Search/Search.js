import React from 'react';

import classes from './Serach.module.css';
import Find from '../../UI/SVG/Find';

class Serach extends React.Component {
    constructor() {
        super();
        this.state = {
            open: classes.Close
        }
        this.input = React.createRef();
    }

    closeInputSearch = () => {
        this.setState({ open: classes.Close });
        document.getElementById("root").removeEventListener("click", this.closeInputSearch);
    }

    openInputSearch = () => {
        this.setState({ open: classes.Open });
        document.getElementById("root").addEventListener("click", this.closeInputSearch)
    }

    componentWillUnmount() {
        document.getElementById("root").removeEventListener("click", this.closeInputSearch);
    }

    render() {
        let { open } = this.state;
        return (
            <form onSubmit={e => e.preventDefault()} className={classes.Search}>
                <div onClick={this.openInputSearch} className={open}>
                    <Find />
                    <input ref={this.input} type="text" placeholder="Search"/>
                </div>
            </form>
        )
    }
}

export default Serach;