import styled, { css } from 'styled-components';

export const SectionStyled = styled.section`
  margin: 0 50px;

  ${props =>
    props.$centered &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;
