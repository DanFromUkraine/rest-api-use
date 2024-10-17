import {
  createSlice,
  PayloadAction,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { AVAILABLE_ACTIONS } from "../constants";
import axios from "axios";
import { valuesType } from "../components/Input";

export type stateType = {
  actionChoosen: string;
  currDataText: string;
  inp_data: {
    inp_address: string;
    inp_text: string;
  };
  error: string;
  dispatch?: ThunkDispatch<stateType, undefined, UnknownAction>;
};

type uploadInpDataType = {
  type: string;
  payload: valuesType;
};

// type actionType<T> = {
//   type: string;
//   payload: T;
// };

const initialState: stateType = {
  actionChoosen: "",
  currDataText:
    "const currDataText = useAppSelector(state => state.currDataText)",
  inp_data: {
    inp_address: "",
    inp_text: "",
  },
  error: "",
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    blueActionClick(state, action) {
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
    uploadInputData(state, action: uploadInpDataType) {
      state.inp_data = action.payload;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    executeButtonClick(state, _action: { type: string }) {
      if (state.actionChoosen) {
        console.log(window.location.href);
        axios({
          method: state.actionChoosen,
          url: window.location.href + state.inp_data.inp_address,
        });
      } else {
        throw "no action chosen";
      }
    },
    writeError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearError(state, _action: { type: string }) {
      state.error = "";
    },
  },
});

export const {
  blueActionClick,
  executeButtonClick,
  uploadInputData,
  writeError,
  clearError,
} = mainSlice.actions;
export default mainSlice.reducer;
