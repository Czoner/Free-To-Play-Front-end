import React from "react";
import ModalWithForm from "./ModalWithForm";

const SignInModal = ({ handleCloseModal, isOpen }) => {
  return (
    <ModalWithForm
      title="SignIn"
      onClose={handleCloseModal}
      buttonText="Sign In"
      buttonText2="or Sign up"
      isOpen={isOpen}
    >
      <label className="modal__label">
        <input
          type="text"
          required
          className="modal__input"
          placeholder="Username"
          name="Username"
        />
        <input
          type="password"
          required
          className="modal__input"
          placeholder="Password"
          name="password"
        />
      </label>
    </ModalWithForm>
  );
};

export default SignInModal;
