import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//represents shape of a State inside of slice that is managed by the reducer
interface CounterState {
  value: number;
}
//initial value for the Sate
const initialState: CounterState = {
  value: 0,
};

//define the slice that contains the reducer logic
const counterSlice = createSlice({
  name: "counter",
  initialState,
  //define the differenttypes of logic and updatesinside reducer
  reducers: {
    //everytime that the action is dispatched we gonna add 1 to the counter, increment
    //inline object function
    incremented(state) {
      //it's ok to do this because immer makes it immutable under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});
export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
