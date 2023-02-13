import { createAction } from '@reduxjs/toolkit';

// Before Async Thunk we should create 3 type of synchronous actions for 1 asynchronous operation;
// While working with backend (async actions) instead of dispatching actions inside of components we are dispatching operations;
// These synchronous actions are dispatched inside operations and then "working" (switch case) inside reducer;

export const fetchAllPending = createAction('contacts/fetchAllPending');
export const fetchAllFulfilled = createAction('contacts/fetchAllFulfilled');
export const fetchAllRejected = createAction('contacts/fetchAllRejected');

export const addContactPending = createAction('contacts/addContactPending');
export const addContactFulfilled = createAction('contacts/addContactFulfilled');
export const addContactRejected = createAction('contacts/addContactRejected');

export const deleteContactPending = createAction(
  'contacts/deleteContactPending'
);
export const deleteContactFulfilled = createAction(
  'contacts/deleteContactFulfilled'
);
export const deleteContactRejected = createAction(
  'contacts/deleteContactRejected'
);

// After implementing Async Thunk these actions are abstracted and hidden inside one operation(thunk);
