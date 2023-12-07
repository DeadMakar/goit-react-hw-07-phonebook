import { ContactEntryForm } from './ContactEntryForm/ContactEntryForm';
import { ContactList } from './ContactList/ContactList';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <ContactEntryForm />
      <SearchFilter />
      <ContactList />
      <GlobalStyle />
    </>
  );
};
