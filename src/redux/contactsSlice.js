import { createSlice, nanoid } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [], 
    reducers: {
        addContact: {
            reducer(state, action) {
               return [...state, action.payload];
                // state.push(action.payload);                
            },
            prepare(name, number) {
                const id = nanoid()
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
           return state.filter(contact => contact.id !== action.payload)
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
// export const { contactsReduser } = contactsSlice.reducer; 

