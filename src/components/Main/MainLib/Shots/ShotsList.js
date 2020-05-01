import React from 'react';

import './Shots.css';
import ShotItem from './ShotItem';
import AsyncComponent from '../../../../HOC/AsyncComponent/AsyncComponent';
import dataJson from './shotData.json';

const AsyncModalShot = AsyncComponent(() => {
    return import('../../../Modal/ModalShot/ModalShot');
});

class ShotsList extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpenModalShot: false,
            data: {},
            shotsData: [],
            isLoadMore: false
        }
        this.loadMoreTimeout = null;
    }


    onOpenModalShot = data => {
        this.setState({
            data,
            isOpenModalShot: true
        })
    }

    onCloseModal = () => this.setState({ isOpenModalShot: false, data: {} });

    componentDidMount() {
        document.addEventListener("scroll", this.loadMore);
        window.addEventListener("resize", this.loadMore);
        window.addEventListener("orientationChange", this.loadMore);

        const shotsData = dataJson;
        this.setState({ shotsData });
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.loadMore);
        window.removeEventListener("resize", this.loadMore);
        window.removeEventListener("orientationChange", this.loadMore);
    }

    renderShots = shots => {
        return shots.map((shot, i) => {
            return <ShotItem onOpenModalShot={this.onOpenModalShot} shotData={shot} key={i} />
        });
    }

    loadMore = () => {
        if(!this.state.isLoadMore) {
            if(this.loadMoreTimeout) {
                clearTimeout(this.loadMoreTimeout);
            }
    
            this.loadMoreTimeout = setTimeout(() => {
                let lastChild = document.querySelector('.shots-grid__item:last-child');
                if(lastChild) {
                    let lastChildToWrapParent = lastChild.offsetTop - lastChild.offsetHeight/2;
                    if(window.pageYOffset > lastChildToWrapParent) {
                        this.setState({ isLoadMore: true })
                        setTimeout(() => {
                            this.setState({ shotsData: [...this.state.shotsData, ...dataJson], isLoadMore: false });
                        }, 2000)
                    }
                }
            }, 60)
        }
    }

    render() {
        const { isOpenModalShot, data, shotsData, isLoadMore } = this.state;
        return (
            <>
                {isOpenModalShot && <AsyncModalShot closeModal={this.onCloseModal} data={data} />}
                <ul className="shots-grid__items">
                    {
                        this.renderShots(shotsData)
                    }
                </ul>
                
                {isLoadMore && <div className="loading-more"><span>Loading more...</span></div>}
            </>
        )
    }
}

export default ShotsList;