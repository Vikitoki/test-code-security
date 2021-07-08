import {
  CHANGE_ACTIVE_HOME_ITEM,
  CHANGE_INFO_TO_HOME_ITEM,
  CHANGE_SAVE_DATA_STATUS,
  FETCH_HOME_ITEMS_LIST_FAILURE,
  FETCH_HOME_ITEMS_LIST_REQUEST,
  FETCH_HOME_ITEMS_LIST_SUCCESS,
} from "../store/homeItems/action-variables";

export interface IHomeListItemData {
  [key: string]: string;
}

export interface IHomeListItem {
  id: string;
  name: string;
  data: IHomeListItemData;
}

export interface HomeItemsState {
  homeList: IHomeListItem[];
  activeItem: IHomeListItem;
  loading: boolean;
  error: string;
  saveDataStatus: boolean;
}

interface FetchHomeItemsListRequest {
  type: typeof FETCH_HOME_ITEMS_LIST_REQUEST;
}

interface FetchHomeItemsListFailure {
  type: typeof FETCH_HOME_ITEMS_LIST_FAILURE;
  payload: string;
}

interface FetchHomeItemsListSuccess {
  type: typeof FETCH_HOME_ITEMS_LIST_SUCCESS;
  payload: IHomeListItem[];
}

interface ChangeActiveHomeItemAction {
  type: typeof CHANGE_ACTIVE_HOME_ITEM;
  payload: string;
}

interface ChangeInfoToHomeItemAction {
  type: typeof CHANGE_INFO_TO_HOME_ITEM;
  payload: IHomeListItemData;
}

interface ChangeSaveDataStatusAction {
  type: typeof CHANGE_SAVE_DATA_STATUS;
}

export type HomeItemsActions =
  | FetchHomeItemsListRequest
  | FetchHomeItemsListFailure
  | FetchHomeItemsListSuccess
  | ChangeActiveHomeItemAction
  | ChangeInfoToHomeItemAction
  | ChangeSaveDataStatusAction;
