import PropTypes from 'prop-types';
import { ButtonStyled, StyledTd } from './styled';

const Contact = ({
  id = '',
  name = '',
  number = '',
  onHandleDeleteContact,
}) => {
  const handleDeleteContact = () => {
    onHandleDeleteContact(id);
  };

  return (
    <>
      <StyledTd>{name}</StyledTd>
      <StyledTd>{number}</StyledTd>
      {/* <p>
        {name}: {number}
      </p> */}
      <ButtonStyled type="button" onClick={handleDeleteContact}>
        <span>Delete</span>
      </ButtonStyled>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onHandleDeleteContact: PropTypes.func,
};

export default Contact;
