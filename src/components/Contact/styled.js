import styled from 'styled-components';

export const StyledTd = styled.td`
  color: #999;
  border: 1px solid #eee;
  padding: 12px 35px;
  border-collapse: collapse;
  text-align: center;
`;

export const ButtonStyled = styled.button`
  display: inline-block;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #03045e;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
  position: absolute;
  top: 50%;
  right: -100px;
  transform: translate(0, -50%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    transform: skew(15deg);
    transition: all 0.5s;
    overflow: hidden;
    z-index: -1;
  }

  &::before {
    left: -10px;
    background: #880808;
  }

  &::after {
    left: -10px;
    background: #ff474d;
  }

  &:hover::before,
  &:hover::after {
    width: 58%;
  }

  &:hover span {
    color: #bf0000;
    transition: 0.3s;
  }

  span {
    color: #03045e;
    font-size: 18px;
    transition: all 0.3s ease-in;
  }
`;
