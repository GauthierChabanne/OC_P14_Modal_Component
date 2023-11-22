import React from 'react';
import "./Modal.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Employee Created !</h2>
        <button onClick={onClose} className="close-modal">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
