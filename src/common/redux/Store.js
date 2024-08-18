import { configureStore } from '@reduxjs/toolkit'
import reducer from '../redux/cartSlice'   //can give any name u wish

const Store = configureStore ({
    reducer: {                       //so over here when u r creating reducer u should give the slicename
        cart: reducer    //here the keyword should be reducer in line 5  becz it is a big reducer inside that we have multiple reducers
    }
});

export default Store;