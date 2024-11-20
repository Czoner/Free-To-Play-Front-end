import React from "react";
import ModalWithForm from "./ModalWithForm";
import { useFormAndValidation } from "../../Hooks/useFormAndValidation";

const SignUpModal = ({
  handleCloseModal,
  isOpen,
  handleSignInModal,
  handleSignUp,
}) => {
  const { values, handleChange, isValid, errors, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      handleSignUp(values);
      resetForm();
    }
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      buttonText="Sign Up"
      buttonText2="or Sign In"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onSign={handleSignInModal}
    >
      <label className="modal__label" htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          className="modal__input"
          required
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <span className="modal__error">{errors.email}</span>
      </label>
      <label className="modal__label" htmlFor="username__signup">
        <input
          type="text"
          name="username"
          id="username__signup"
          className="modal__input"
          required
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
        />
        <span className="modal__error">{errors.username}</span>
      </label>
      <label className="modal__label" htmlFor="password__signup">
        <input
          type="password"
          name="password"
          id="password__signup"
          className="modal__input"
          required
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <span className="modal__error">{errors.password}</span>
      </label>
    </ModalWithForm>
  );
};

export default SignUpModal;
