import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as operations from 'redux/contacts-operations';
import { selectContacts } from 'redux/selectors';

import css from './ContactForm.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  // const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleContactCreate = (name, number) => {
    const duplicateName = contacts.find(contact => contact.name === name);
    if (duplicateName) {
      alert(name + ' is already in contacts.');
      return;
    }
    const contact = { name, phone: number };
    dispatch(operations.addContact(contact));
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error();
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    handleContactCreate(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className={css.input}
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        className={css.input}
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
