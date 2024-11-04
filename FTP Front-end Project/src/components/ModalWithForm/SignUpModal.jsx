import React from "react";
import { useForm } from "../Hooks/useForm";
import ModalWithForm from "./ModalWithForm";

const SignUpModal = ({
  handleCloseModal,
  isOpen,
  handleSignInModal,
  handleSignUp,
}) => {
  const { values, handleChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(values);
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
      </label>
      <label className="modal__label" htmlFor="username">
        <input
          type="text"
          name="username"
          id="username"
          className="modal__input"
          required
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label" htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          className="modal__input"
          required
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default SignUpModal;
