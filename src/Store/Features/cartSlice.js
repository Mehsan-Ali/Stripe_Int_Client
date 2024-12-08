import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts: [],
    total: 0
}

const cardSlice = createSlice({
    name: 'cartslice',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const existingItem = state.carts.findIndex((item) => item._id === action.payload._id)
            
            if (existingItem >= 0) {
                state.carts[existingItem].quantity += 1
            }else {
                const temp = { ...action.payload, quantity: 1 }
                state.carts.push(temp)
            }

            state.total += action.payload.price
        },

        decrementQuantity: (state, action) => {
            const item = state.carts.findIndex((item) => item._id === action.payload._id);
            if (state.carts[item].quantity >= 1) {
              state.carts[item].quantity -= 1
            }
        },

        removeFromCart: (state, action) => {
            state.carts = state.carts.filter((item) => item._id !== action.payload)
            state.total -= action.payload.price
        },

        clearCart: (state) => {
            state.carts = []
            state.total = 0
        }
    }
})

export const { addToCart, removeFromCart, clearCart, decrementQuantity } = cardSlice.actions

export default cardSlice.reducer