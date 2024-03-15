import PropTypes from 'prop-types';
import { SectionStyled } from './styled';

const Section = ({ title = '', $centered, children }) => {
  return (
    <SectionStyled $centered={$centered}>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
