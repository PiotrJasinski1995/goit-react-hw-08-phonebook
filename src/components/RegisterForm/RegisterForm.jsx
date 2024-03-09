import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { nanoid } from '@reduxjs/toolkit';
import { RegisterFormStyled } from './styled';

const RegisterForm = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormStyled onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor={nameInputId}>Username</label>
      <input type="text" name="name" id={nameInputId} required />
      <label htmlFor={emailInputId}>Email</label>
      <input type="email" name="email" id={emailInputId} required />
      <label htmlFor={passwordInputId}>Password</label>
      <input type="password" name="password" id={passwordInputId} required />
      <button type="submit">Register</button>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
