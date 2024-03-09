import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { nanoid } from '@reduxjs/toolkit';
import { LoginFormStyled } from './styled';

const LoginForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor={emailInputId}>Email</label>
      <input type="email" name="email" id={emailInputId} required />
      <label htmlFor={passwordInputId}>Password</label>
      <input type="password" name="password" id={passwordInputId} required />
      <button type="submit">Log In</button>
    </LoginFormStyled>
  );
};

export default LoginForm;
