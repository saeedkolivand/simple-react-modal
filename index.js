import React, {} from "react";
import PropTypes from 'prop-types';
import "./style.scss";
import Icon from "../Icon";

const Modal = props => {

    const {showModal, onClose} = props;

    return (
        showModal&&<div className="modalStyle">
            <div className="background" onClick={onClose}/>
            <div className="childStyle">
                <button onClick={onClose} className="btn closeButton">
                    <Icon size={15} color="#7c83a1" icon="icons-close-alt"/>
                </button>
                {props.children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;