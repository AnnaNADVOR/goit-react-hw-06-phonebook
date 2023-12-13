import { configureStore } from '@reduxjs/toolkit';
import { persistStore} from 'redux-persist';

import { filterSlice } from './filterSlice';

import { contactsReduser } from './contactsSlice';

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        contacts: contactsReduser,
    },
});

export const persistor = persistStore(store);