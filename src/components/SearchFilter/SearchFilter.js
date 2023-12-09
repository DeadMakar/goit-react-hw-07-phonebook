import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledSearchFilter, ContactTitle } from './SearchFilter.styled';
import { changeFilter } from 'redux/filterSlice';

export const SearchFilter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactTitle>Contacts</ContactTitle>
      <StyledSearchFilter>
        <h2>Search contacts</h2>
        <input onChange={e => dispatch(changeFilter(e.target.value))} />
      </StyledSearchFilter>
    </>
  );
};
