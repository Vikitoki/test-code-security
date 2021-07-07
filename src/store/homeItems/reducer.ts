import { HomeItemsActions, HomeItemsState } from "../../types/homeItems";
import {
  FETCH_HOME_ITEMS_LIST_FAILURE,
  FETCH_HOME_ITEMS_LIST_REQUEST,
  FETCH_HOME_ITEMS_LIST_SUCCESS,
} from "./action-variables";

const initialState: HomeItemsState = {
  homeList: [],
  activeItem: null,
  loading: false,
  error: "",
};

export const homeItemsReducer = (
  state = initialState,
  action: HomeItemsActions
): HomeItemsState => {
  switch (action.type) {
    case FETCH_HOME_ITEMS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOME_ITEMS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        homeList: action.payload,
      };
    case FETCH_HOME_ITEMS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
