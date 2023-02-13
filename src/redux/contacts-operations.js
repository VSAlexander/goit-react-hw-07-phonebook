import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsAPI from './contacts-api';

// Before using Async Thunk we should do this + create 3 type of actions

// export const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchAllPending());
//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(actions.fetchAllFulfilled(contacts));
//   } catch (error) {
//     dispatch(actions.fetchAllRejected(error));
//   }
// };

// export const addContact = contact => async dispatch => {
//   //   dispatch(actions.addContactPending());
//   try {
//     const newContact = await contactsAPI.addContact(contact);
//     dispatch(actions.addContactFulfilled(newContact));
//   } catch (error) {
//     dispatch(actions.addContactRejected(error.message));
//   }
// };

// export const deleteContact = contactID => async dispatch => {
//   //   dispatch(actions.deleteContactPending());
//   try {
//     const deletedContact = await contactsAPI.deleteContact(contactID);
//     dispatch(actions.deleteContactFulfilled(deletedContact));
//   } catch (error) {
//     dispatch(actions.deleteContactRejected(error.message));
//   }
// };

// Async Thunk

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const newContact = await contactsAPI.addContact(contact);
      return newContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const deletedContact = await contactsAPI.deleteContact(contactID);
      return deletedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
