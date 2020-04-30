import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div id="modal">
            <div className="modal-backdrop" onClick={props.closeModal}>
                <a
                    href="#close-modal" className="modal-close-icon"
                    onClick={props.closeModal}
                > </a>
                {props.children}
            </div>
        </div >,
        document.querySelector("#modal-wrapp")
    )
}

export default Modal;