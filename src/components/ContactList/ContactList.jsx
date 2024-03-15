import Contact from 'components/Contact/Contact';
import Notification from 'components/Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { StyledTh, StyledTr, TableContainer } from './styled';

const ContactList = () => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {filteredContacts.length === 0 ? (
        <Notification message="No contacts matching given criteria"></Notification>
      ) : (
        <ul>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <StyledTh>Name</StyledTh>
                  <StyledTh>Phone</StyledTh>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map(contact => {
                  const { id, name, number } = contact;

                  return (
                    <>
                      <StyledTr key={id}>
                        <Contact
                          id={id}
                          name={name}
                          number={number}
                          onHandleDeleteContact={handleDeleteContact}
                        />
                      </StyledTr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </TableContainer>
        </ul>
      )}
    </>
  );
};

export default ContactList;
