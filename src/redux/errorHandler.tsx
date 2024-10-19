import { Middleware } from "redux";
import { clearError, writeError } from "./mainSlice";

const crashReporter: Middleware = (store) => (next) => (action) => {
  try {
    if (store.getState().error.length > 0) {
      return next(clearError());
    }

    return next(action);
  } catch (err) {
    if (typeof err === "string") {
      store.dispatch(writeError(err));
    }

    throw err;
  }
};

export { crashReporter };
