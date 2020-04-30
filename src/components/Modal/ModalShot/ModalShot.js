import React from 'react';

import './ModalShot.css';
import Modal from '../Modal';
import ShotAttributes from './ShotAttributes/ShotAttributes';
import SlideShot from './SlideShot/SlideShot';
import ShotDetail from './ShotDetail/ShotDetail';
import Shortcuts from './Shortcuts/Shortcuts';
import ShotSkeleton from './ShotSkeleton/ShotSkeleton';

class ModalShot extends React.Component {
    state = {
        loading: true
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ loading: false });
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { action, avatar, displayName, image, title } = this.props.data;
        const { loading } = this.state;
        return (
            <Modal closeModal={this.props.closeModal}>
                
                <div
                    className="modal-shot"
                    onClick={e => e.stopPropagation()}
                >
                    {
                        loading ?
                        <ShotSkeleton /> :
                        <>
                            <div className="modal-top">
                                <ShotAttributes title={title} avatar={avatar} name={displayName} />
                            </div>
                            <div className="modal-body">
                                <SlideShot image={image} />
                                <ShotDetail action={action} name={displayName} />
                            </div>
                            <div className="modal-bot">
                                <Shortcuts />
                            </div>
                        </>
                    }
                </div>
            </Modal>
        )
    }
}

export default ModalShot;