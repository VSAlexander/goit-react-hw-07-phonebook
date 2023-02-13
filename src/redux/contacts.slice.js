import { createSlice } from '@reduxjs/toolkit';
import * as operations from './contacts-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [operations.fetchContacts.pending]: handlePending,
    [operations.fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [operations.fetchContacts.rejected]: handleRejected,

    [operations.addContact.pending]: handlePending,
    [operations.addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
      state.error = null;
    },
    [operations.addContact.rejected]: handleRejected,

    [operations.deleteContact.pending]: handlePending,
    [operations.deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.error = null;
    },
    [operations.deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
