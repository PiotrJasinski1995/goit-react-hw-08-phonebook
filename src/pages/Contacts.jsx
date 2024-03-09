import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';
import MainHeading from 'components/MainHeading/MainHeading';
import Section from 'components/Section/Section';
import ColumnDiv from 'components/ColumnDiv/ColumnDiv';
import ContactForm from 'components/ContactForm/ContactForm';
import Notification from 'components/Notification/Notification';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <MainHeading visually-hidden>Your contacts</MainHeading>
      <Section title="Phonebook">
        <ColumnDiv>
          <ContactForm />
        </ColumnDiv>
      </Section>
      <Section title="Contacts">
        {error && <b>{error}!!!</b>}
        {!error && (
          <>
            {contacts.length === 0 ? (
              <Notification message="No contacts in phonebook" />
            ) : (
              <>
                <ColumnDiv>
                  <Filter />
                  {isLoading && <Loader />}
                </ColumnDiv>
                <ContactList />
              </>
            )}
          </>
        )}{' '}
      </Section>
    </>
  );
}
