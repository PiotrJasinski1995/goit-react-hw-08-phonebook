import { MainHeadingStyled } from './styled';

const MainHeading = ({ $visuallyhidden, children }) => {
  return (
    <MainHeadingStyled $visuallyhidden={$visuallyhidden}>
      {children}
    </MainHeadingStyled>
  );
};

export default MainHeading;
