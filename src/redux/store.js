import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { filterSlice } from './filterSlice';
import { contactsSlice} from './contactsSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persisted

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        contacts: contactsSlice.reducer,
  },
})