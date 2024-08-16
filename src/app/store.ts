import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import { dogsApiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
  //this will automatically call Combine Reducers => state.counter filled in our state
  reducer: {
    counter: counterReducer,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  middleware: (getDefailtMiddleware) => {
    return getDefailtMiddleware().concat(dogsApiSlice.middleware);
  },
});

//exporting type that based on our store itself that we can use further
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
