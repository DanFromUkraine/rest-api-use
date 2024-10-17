import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AVAILABLE_ACTIONS } from "../constants";
import axios from "axios";

const initialState = {
  actionChoosen: "",
  currDataText: "const currDataText = useAppSelector(state => state.currDataText)",
};

type exeBtnType = {
  type: string;
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
    executeButtonClick(state, action: exeBtnType) {
      axios({method: state.actionChoosen})
    },
  },
});


export const { blueActionClick } = mainSlice.actions;
export default mainSlice.reducer;
