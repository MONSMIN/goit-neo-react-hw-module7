import { useState, useEffect } from 'react';


import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx';
import { FaAddressBook } from 'react-icons/fa6';

import css from './App.module.css';

function App() {
  const [filter, setFilter] = useState('');

  const handleSearchChange = input => {
    setFilter(input);
  };

  return (
    <div className={css.container}>
      <h1 className={css.header}>
        <FaAddressBook className={css.headerIcon} />
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;