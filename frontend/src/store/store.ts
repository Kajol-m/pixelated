import {configureStore} from '@reduxjs/toolkit';
import profileReducer from "./features/userSlice"
export const store= configureStore({
    reducer:{
        profileDetails:profileReducer
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