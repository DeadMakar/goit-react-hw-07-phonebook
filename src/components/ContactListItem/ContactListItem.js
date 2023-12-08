import React from 'react';
import { StyledContactListItem } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  return (
    <StyledContactListItem>
      <p>{contact.name}:</p>
      <span>{contact.phone}</span>
    </StyledContactListItem>
  );
};
