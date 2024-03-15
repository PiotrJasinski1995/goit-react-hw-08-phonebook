import { AuthNavStyled, NavLinkStyled } from './styled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </AuthNavStyled>
  );
};
