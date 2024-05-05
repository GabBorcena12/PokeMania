import React, { useEffect, useCallback } from 'react';
import '../css/modal.css';

const Modal = ({ onClose, show, header, content }) => {
    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    useEffect(() => {
        const timer = setTimeout(() => {            
            handleClose();
        }, 3000);
        
        return () => clearTimeout(timer);      
    }, [handleClose]);

    return (
        <>
            {show && (
                <div className='modal-overlay'>
                    <div className='modal-container' style={{ backgroundColor: '#df6464' }}>
                        <div className='modal-button-container'>
                            <button onClick={handleClose} className='modal-close-button'>
                                X
                            </button>
                        </div>
                        <div className='modal-details-container'>
                            <div className='modal-header'>
                                <span>{header}</span>
                            </div> 
                            <div className='modal-content'>
                                <span>{content}</span>
                            </div> 
                        </div>    
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;
