import React from "react";
import Button from "./Button";

function Modal({ title, description, showModal, setShowModal }) {
    
  return (
    <div className={`modal ${showModal? 'active': ''}`}>
      <div className="modal__wrapper">
        <div className={`modal__content ${showModal? 'active': ''}`}>
          <div className="modal__body">
            <div className="modal__body__info">
                <p className="modal__body__title">{title}</p>
                <p className="modal__body__description">{description}</p>
            </div>
            <Button
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
