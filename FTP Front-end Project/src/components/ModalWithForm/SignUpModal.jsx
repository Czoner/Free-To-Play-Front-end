import React from "react";
import { useRef, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const SignUpModal = ({ handleCloseModal, isOpen }) => {
  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      buttonText="Sign Up"
      buttonText2="or Sign In"
      isOpen={isOpen}
    >
      <label className="modal__label">
        <input
          type="email"
          name="email"
          className="modal__input"
          required
          placeholder="Email"
        />
        <input
          type="text"
          name="Username"
          className="modal__input"
          required
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          className="modal__input"
          required
          placeholder="Password"
        />
        <input
          type="password"
          name="password"
          className="modal__input"
          required
          placeholder="Password again"
        />
      </label>
    </ModalWithForm>
  );
};

export default SignUpModal;
