import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AVAILABLE_ACTIONS } from "../constants";

const initialState = {
  actionChoosen: "",
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    blueActionClick(state, action: PayloadAction<string>) {
      if (AVAILABLE_ACTIONS.includes(action.payload)) {
        state.actionChoosen = action.payload;
      } else {
        throw (
          action.payload +
          " is not in AVAILABLE_ACTIONS " +
          AVAILABLE_ACTIONS.join(", ")
        );
      }
    },
  },
});

export const { blueActionClick } = mainSlice.actions;
export default mainSlice.reducer;
