import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Blocks } from 'react-loader-spinner';

import * as operations from 'redux/contacts-operations';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';

import css from './ContactList.module.css';

export function ContactList() {
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const handleContactRemove = contactID => {
    dispatch(operations.deleteContact(contactID));
  };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().split(' ').join('').includes(filter)
  // );

  return (
    <>
      {isLoading && (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      )}

      <ul className={css.contactList}>
        {filteredContacts &&
          filteredContacts.map(contact => {
            const handleDelete = () => {
              handleContactRemove(contact.id);
            };
            return (
              <li key={contact.id}>
                <div>
                  {contact.name}: {contact.phone}
                  <button type="button" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
