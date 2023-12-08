import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import {
  StyledContactList,
  StyledContactItem,
  StyledDeleteButton,
} from './ContactList.styled';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilters } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  const filteredContacts = contacts.filter(contact => {
    const contactName = contact.name ? contact.name.toLowerCase() : '';
    const filterLowerCase = filter ? filter.toLowerCase() : '';
    return contactName.includes(filterLowerCase);
  });

  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <StyledContactItem key={contact.id}>
          <ContactListItem contact={contact} />
          <StyledDeleteButton onClick={() => handleDelete(contact.id)}>
            X
          </StyledDeleteButton>
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};
