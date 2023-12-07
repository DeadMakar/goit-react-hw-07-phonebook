import { ContactEntryForm } from './ContactEntryForm/ContactEntryForm';
import { ContactList } from './ContactList/ContactList';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { GlobalStyle } from './GlobalStyle';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactEntryForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <SearchFilter />
      <ContactList />
      <GlobalStyle />
    </>
  );
};
