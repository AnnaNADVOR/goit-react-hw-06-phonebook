import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contactsList: [] },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contactsList.push(action.payload);                
            },
            prepare(name, number) {
                const id = nanoid();
                return {
                    payload: {
                        name,
                        number,
                        id,
                    },
                };
            },           
        },
        deleteContact(state, action) {
            state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload);
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
}

export const contactsReduser = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;


