import {
  createSlice,
  PayloadAction,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { ALLOWED_ACTIONS } from "../constants";
// import axios from "axios";
import { valuesType } from "../components/Input";
import { useGetOutputType } from "../utils/reactQuery";

export type stateType = {
  actionChosen: ALLOWED_ACTIONS;
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

type executeButtonClickActionType = {
  type: string;
  payload: {
    data: string;
    error: unknown;
    isLoading: boolean;
  };
};

type loadGetResponseActionType = {
  type: string;
  payload: useGetOutputType;
};

const initialState: stateType = {
  actionChosen: "",
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
    blueActionClick(state, action: { type: string; payload: ALLOWED_ACTIONS }) {
      state.actionChosen = action.payload;
    },
    uploadInputData(state, action: uploadInpDataType) {
      state.inp_data = action.payload;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    executeButtonClick(state, action: executeButtonClickActionType) {
      if (state.actionChosen) {
        const { data, isLoading, error } = action.payload;

        state.currDataText = !isLoading ? data : "Loading...";
        state.error = typeof error === "string" ? error : state.error;
        state.actionChosen = "";
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
    loadGetResponse(state, action: loadGetResponseActionType) {
      const { data, isLoading, error } = action.payload;
      state.currDataText = !isLoading ? data : "Loading...";
      state.error = typeof error === "string" ? error : state.error;
    },
  },
});

export const {
  blueActionClick,
  executeButtonClick,
  uploadInputData,
  writeError,
  clearError,
  loadGetResponse
} = mainSlice.actions;
export default mainSlice.reducer;
