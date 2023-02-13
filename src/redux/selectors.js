import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

// Before memoization - working whether there is a need or there's no need;

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);
//   console.log('selectFilteredContacts');
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().split(' ').join('').includes(filter)
//   );
// };

// After memoization

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    // console.log('selectFilteredContacts');
    return contacts.filter(contact =>
      contact.name.toLowerCase().split(' ').join('').includes(filter)
    );
  }
);
