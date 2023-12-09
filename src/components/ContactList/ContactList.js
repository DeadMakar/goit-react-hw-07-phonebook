import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import {
  StyledContactList,
  StyledContactItem,
  StyledDeleteButton,
} from './ContactList.styled';
import { deleteContact } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactsByFilter = useSelector(selectVisibleContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <>
      {error && <b>Something went wrong... Try reloading the page </b>}
      {isLoading && !error && 'Loading...'}
      <StyledContactList>
        {contactsByFilter.map(contact => (
          <StyledContactItem key={contact.id}>
            <ContactListItem contact={contact} />
            <StyledDeleteButton onClick={() => handleDelete(contact.id)}>
              X
            </StyledDeleteButton>
          </StyledContactItem>
        ))}
      </StyledContactList>
    </>
  );
};
