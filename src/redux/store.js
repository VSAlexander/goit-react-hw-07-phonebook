// Before Redux Toolkit

// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

// After
import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts.slice';
import { filterReducer } from './filter.slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
