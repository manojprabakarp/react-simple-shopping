import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'shop',
    initialState: {
        products: ['item 1'," item 2","item 3","item 4"],
        carts:[]
    },
    reducers: {
        addToCart: (state, action) => {
            state.carts.push(action.payload);   
        },
        removeFromCart: (state, action) =>{
            state.carts.splice(state.carts.indexOf(action.payload), 1);
            console.log(state,'remove from cart')
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