import { HomeItemsActions, HomeItemsState } from "../../types/homeItems";
import {
  CHANGE_ACTIVE_HOME_ITEM,
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
        activeItem: action.payload[0],
      };
    case FETCH_HOME_ITEMS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHANGE_ACTIVE_HOME_ITEM:
      const newActiveItem = state.homeList.find(
        (item) => item.id === action.payload
      );

      if (newActiveItem) {
        return {
          ...state,
          activeItem: newActiveItem,
        };
      }

      return {
        ...state,
      };

    default:
      return state;
  }
};
