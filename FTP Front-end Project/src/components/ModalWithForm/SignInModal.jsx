import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "../Hooks/useForm";
import ModalWithForm from "./ModalWithForm";

const SignInModal = ({ handleCloseModal, isOpen }) => {
  const { values, handleChange } = useForm({
    username: "",
    password: "",
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

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
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <input
          type="password"
          required
          className="modal__input"
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
