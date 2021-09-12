import React from 'react'
import ReactModal from 'react-modal'
import Counter from './Counter'


const Modal = (props) => {

    let modalStyle = {
        content: {
            top: '45%',
            bottom: '-10%',
            left: '50%',
            right: '40%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            scrollbarWidth: 'thin',
        }
    }

    const handleClose = () => {
        props.setShowModal(false, '')
    }

    return (
        <div >
            {props.modal && <ReactModal style={modalStyle}
                isOpen={props.modal.isOpen}
                contentLabel={props.modal.contentLabel}
                ariaHideApp={false}
                onRequestClose={handleClose}
            >

                <Counter data={props.modal.data} />
                <button className="btn btn-success" onClick={handleClose}>Close</button>
            </ReactModal>}
        </div>
    )
}

export default Modal
