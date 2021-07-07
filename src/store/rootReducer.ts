import { combineReducers } from "redux";
import { homeItemsReducer } from "./homeItems/reducer";

export const rootReducer = combineReducers({
  homeItems: homeItemsReducer,
});
