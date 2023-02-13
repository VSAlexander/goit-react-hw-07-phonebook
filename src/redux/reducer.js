import { createReducer, combineReducers } from '@reduxjs/toolkit';

import * as contactsOperations from './contacts-operations';

// Before using Slice

const items = createReducer([], {
  [contactsOperations.fetchContacts.fulfilled]: (_, action) => action.payload,
  [contactsOperations.addContact.fulfilled]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsOperations.deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

const isLoading = createReducer(false, {
  [contactsOperations.fetchContacts.pending]: () => true,
  [contactsOperations.addContact.pending]: () => true,
  [contactsOperations.deleteContact.pending]: () => true,

  [contactsOperations.fetchContacts.fulfilled]: () => false,
  [contactsOperations.addContact.fulfilled]: () => false,
  [contactsOperations.deleteContact.fulfilled]: () => false,

  [contactsOperations.fetchContacts.rejected]: () => false,
  [contactsOperations.addContact.rejected]: () => false,
  [contactsOperations.deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [contactsOperations.fetchContacts.rejected]: (_, action) => action.payload,
  [contactsOperations.addContact.rejected]: (_, action) => action.payload,
  [contactsOperations.deleteContact.rejected]: (_, action) => action.payload,

  [contactsOperations.fetchContacts.fulfilled]: () => null,
  [contactsOperations.addContact.fulfilled]: () => null,
  [contactsOperations.deleteContact.fulfilled]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
