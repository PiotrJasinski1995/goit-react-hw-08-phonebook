import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 1.5em;

  &:hover,
  &:focus,
  &.active {
    color: red;
  }

  &.active {
    font-weight: 600;
  }
`;
