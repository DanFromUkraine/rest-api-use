import { configureStore, Tuple } from "@reduxjs/toolkit";
import rootReducer from "./mainSlice";
import { crashReporter } from "./errorHandler";

export const store = createStore();

export function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: () => new Tuple(crashReporter),
  });

  return store;
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
