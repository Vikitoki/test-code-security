import { HomeItemsActions, IHomeListItem } from "../../types/homeItems";
import {
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
