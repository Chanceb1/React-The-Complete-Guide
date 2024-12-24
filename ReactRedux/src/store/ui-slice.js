import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: null }, // initial state of the slice
    reducers: { // map of methods that represent all the differnt actions that can be triggered
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },

        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    },  
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;