import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers:{                                  //here the keyword is reducers becz we have multiple small reducer here
        addItems: (state,action) =>{           //state means initial state
            state.items.push(action.payload);
        },

        removeItems: (state,action) => {
            state.items = state.items.filter(item => item.card.info.id !== action.payload.card.info.id);
            //  if the id of the current item in the array is not equal to the id of the item that should be removed. If they are not equal, the item is kept in the new array. If they are equal, the item is excluded from the new array.
        },

        clearItems: (state) => {
            state.items.length = 0;
        },

    },
})

export default cartSlice.reducer;   //here the keyword is reducer becz we are exporting one reduce at a tym

export const {addItems,removeItems, clearItems} = cartSlice.actions;  //note the syntax