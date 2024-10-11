import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  onClose,
  children,
  buttonText,
  buttonText2,
}) => {
  return (
    <div className={`modal modal__type_${title}`}>
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={onClose} />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form">{children}</form>
        <button type="submit" className="modal__submit">
          {buttonText}
        </button>
        <button type="button" className="modal__button">
          {buttonText2}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
