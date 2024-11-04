import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "../Hooks/useForm";
import ModalWithForm from "./ModalWithForm";

const SignInModal = ({
  handleCloseModal,
  isOpen,
  handleSignUpModal,
  handleSignIn,
}) => {
  const { values, handleChange } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(values);
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
      </label>
    </ModalWithForm>
  );
};

export default SignInModal;
