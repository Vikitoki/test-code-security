import {
  HomeItemsActions,
  IHomeListItem,
  IHomeListItemData,
} from "../../types/homeItems";
import {
  CHANGE_ACTIVE_HOME_ITEM,
  CHANGE_INFO_TO_HOME_ITEM,
  CHANGE_SAVE_DATA_STATUS,
  FETCH_HOME_ITEMS_LIST_FAILURE,
  FETCH_HOME_ITEMS_LIST_REQUEST,
  FETCH_HOME_ITEMS_LIST_SUCCESS,
} from "./action-variables";

export const fetchHomeItemsListRequest = (): HomeItemsActions => ({
  type: FETCH_HOME_ITEMS_LIST_REQUEST,
});

export const fetchHomeItemsListSuccess = (
  payload: IHomeListItem[]
): HomeItemsActions => ({
  type: FETCH_HOME_ITEMS_LIST_SUCCESS,
  payload,
});

export const fetchHomeItemsListFailure = (
  payload: string
): HomeItemsActions => ({
  type: FETCH_HOME_ITEMS_LIST_FAILURE,
  payload,
});

export const changeActiveHomeItem = (payload: string): HomeItemsActions => ({
  type: CHANGE_ACTIVE_HOME_ITEM,
  payload,
});

export const changeInfoToHomeItem = (
  payload: IHomeListItemData
): HomeItemsActions => ({
  type: CHANGE_INFO_TO_HOME_ITEM,
  payload,
});

export const changeSaveDataStatus = (): HomeItemsActions => ({
  type: CHANGE_SAVE_DATA_STATUS,
});
