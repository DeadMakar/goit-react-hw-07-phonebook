import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import {
  StyledContactList,
  StyledContactItem,
  StyledDeleteButton,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilters } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <StyledContactItem key={contact.id}>
          <ContactListItem contact={contact} />
          <StyledDeleteButton
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </StyledDeleteButton>
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};
