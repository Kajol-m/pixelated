import {configureStore} from '@reduxjs/toolkit';
import profileReducer from "./features/userSlice";
import addressReducer from "./features/addressSlice";
import orderReducer from './features/orderSlice';
import wishlistReducer from './features/wishlistSlice';

export const store= configureStore({
    reducer:{
        profileDetails:profileReducer,
        addresses: addressReducer,
        orders:orderReducer,
        wishlist: wishlistReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["profileDetails.dob"], // ignore dob field
        ignoredActionPaths: ["payload.dob"], // ignore actions that include dob
      },
    }),
})

//types in typescript
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch