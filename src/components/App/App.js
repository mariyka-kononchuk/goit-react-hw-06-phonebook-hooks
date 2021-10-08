import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from '../../data/contacts.json'
import s from './App.module.css';

import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

export default function App () {
  const [contacts, setContacts] = useState(data);
  const [filter, setFilter] = useState('');
 
  const addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    };

    if (contacts.find(option => option.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts([contact, ...contacts]);
  }
  
  const deleteContact = contactId => {
    setContacts(
      contacts.filter(contact => contact.id !==contactId),
    )
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  }

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter));
  }
  
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, [])
  
  useEffect(() => {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])


    return (
      <Container>
        <div>
          <h1 className={s.titlePhonebbok}>Phonebook</h1>
          <ContactForm onAddContact={addContact} />
          <h2 className={s.titleContacts}>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
        </div>
      </Container>
    );
  
}


