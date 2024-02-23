'use client'
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:['hola'],
    reducers:{
        add(state,action){
            state.push(action.payload)
        }
    }
})

export default cartSlice.reducer