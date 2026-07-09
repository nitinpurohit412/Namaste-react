import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers :{
        addItem : (state, action)=>{
            //! Were are mutating the state here.
            state.items.push(action.payload)
        },
        removeItem : (state, action)=>{
            state.items.pop();
        },
        clearCart : (state, action)=>{
            state.items.length = 0
        }
    }
})

export const{addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;