import { HomeItemsActions, HomeItemsState } from "../../types/homeItems";
import {
  CHANGE_ACTIVE_HOME_ITEM,
  CHANGE_INFO_TO_HOME_ITEM,
  CHANGE_SAVE_DATA_STATUS,
  FETCH_HOME_ITEMS_LIST_FAILURE,
  FETCH_HOME_ITEMS_LIST_REQUEST,
  FETCH_HOME_ITEMS_LIST_SUCCESS,
} from "./action-variables";

const initialState: HomeItemsState = {
  homeList: [],
  activeItem: { id: "", name: "", data: {} },
  loading: false,
  error: "",
  saveDataStatus: false,
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
    case CHANGE_INFO_TO_HOME_ITEM:
      const modifiedActiveItem = {
        ...state.activeItem,
        data: action.payload,
      };

      const newHomeList = state.homeList.map((item) =>
        item.id === modifiedActiveItem.id ? modifiedActiveItem : item
      );

      return {
        ...state,
        activeItem: modifiedActiveItem,
        homeList: newHomeList,
      };
    case CHANGE_SAVE_DATA_STATUS:
      return {
        ...state,
        saveDataStatus: !state.saveDataStatus,
      };
    default:
      return state;
  }
};
