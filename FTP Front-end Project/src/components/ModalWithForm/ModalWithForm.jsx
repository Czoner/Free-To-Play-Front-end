import React from "react";
import { useEffect, useRef, useState } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  onClose,
  children,
  buttonText,
  buttonText2,
  isOpen,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className={`modal ${isOpen ? "active" : ""} modal__type_${title}`}>
      <div className="modal__content" ref={modalRef}>
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
