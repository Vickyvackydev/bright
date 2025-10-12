import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GlobalTypes {
  darkMode: boolean;
}
const initialState: GlobalTypes = {
  darkMode: false,
};
export const GlobalSlice = createSlice({
  initialState,
  name: "globalstate",
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode } = GlobalSlice.actions;
export const selectDarkMode = (state: RootState) => state.globalstate.darkMode;

export const globalReducer = GlobalSlice.reducer;
