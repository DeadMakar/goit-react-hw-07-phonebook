import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import {
  StyledContactList,
  StyledContactItem,
  StyledDeleteButton,
} from './ContactList.styled';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilters } from 'redux/selectors';

export const ContactList = contact => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <StyledContactItem key={contact.id}>
          <ContactListItem contact={contact} />
          <StyledDeleteButton
            onClick={() => dispatch(handleDelete(contact.id))}
          >
            Delete
          </StyledDeleteButton>
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};
