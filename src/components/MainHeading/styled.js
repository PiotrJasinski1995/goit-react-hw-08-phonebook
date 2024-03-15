import styled, { css } from 'styled-components';

export const MainHeadingStyled = styled.h1`
  font-weight: 500;
  font-size: 48;
  text-align: 'center';

  ${props =>
    props.$visuallyhidden &&
    css`
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    `}
`;
