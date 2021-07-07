import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const middleware = [ReduxThunk];

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
