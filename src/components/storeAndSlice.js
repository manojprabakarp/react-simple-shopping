import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'shop',
    initialState: {
        products: ['item 1', " item 2", "item 3", "item 4", "item 5", "item 6", "item 7"],
        carts: []
    },
    reducers: {
        addToCart: (state, action) => {
            let isExisting = false;
            state.carts.map(element => {
                if (element.id === action.payload.id) {
                    element.count++;
                    isExisting = !isExisting;
                    //break;
                }
            });
            if (!isExisting) {
                action.payload['count'] = 1;
                state.carts.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.carts.map((element, index) => {
                if (element.id === action.payload) {
                   state.carts.splice(index, 1);
                   //break;
                }
            });
        }
    },
});
export const cartActions = cartSlice.actions;
export const getProducts = state => state.shop.products;
export const getCarts = state => state.shop.carts;
export default configureStore({
    reducer: {
        shop: cartSlice.reducer,
    },
});