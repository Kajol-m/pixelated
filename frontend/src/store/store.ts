import {configureStore} from '@reduxjs/toolkit';

export const store= configureStore({
    reducer:{}
})

//types in typescript
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch