import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilters = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    const result = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return result;
  }
);
