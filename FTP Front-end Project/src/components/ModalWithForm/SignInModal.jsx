import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import { useFormAndValidation } from "../../Hooks/useFormAndValidation";

const SignInModal = ({
  handleCloseModal,
  isOpen,
  handleSignUpModal,
  handleSignIn,
}) => {
  const { values, handleChange, isValid, errors, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      handleSignIn(values);
      resetForm();
    }
  };

  return (
    <ModalWithForm
      title="SignIn"
      onClose={handleCloseModal}
      buttonText="Sign In"
      buttonText2="or Sign up"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onSign={handleSignUpModal}
    >
      <label className="modal__label" htmlFor="username">
        <input
          type="text"
          required
          className="modal__input"
          id="username"
          placeholder="Username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <span className="modal__error">{errors.username}</span>
      </label>
      <label className="modal__label" htmlFor="password">
        <input
          type="password"
          required
          className="modal__input"
          id="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <span className="modal__error">{errors.password}</span>
      </label>
    </ModalWithForm>
  );
};

export default SignInModal;
