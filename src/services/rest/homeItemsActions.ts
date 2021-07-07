import { Dispatch } from "react";
import {
  changeActiveHomeItem,
  fetchHomeItemsListFailure,
  fetchHomeItemsListRequest,
  fetchHomeItemsListSuccess,
} from "../../store/homeItems/action-creators";
import { HomeItemsActions, IHomeListItem } from "../../types/homeItems";

export const getHomeItems = () => {
  return async (dispatch: Dispatch<HomeItemsActions>) => {
    try {
      dispatch(fetchHomeItemsListRequest());

      const response = await fetch("http://localhost:8800/items");

      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, повторите попытку через 5 секунд"
        );
      }

      const data: IHomeListItem[] = await response.json();
      dispatch(fetchHomeItemsListSuccess(data));
    } catch (error) {
      dispatch(fetchHomeItemsListFailure(error.message));
    }
  };
};

export const getNewActiveHomeItem = (id: string) => {
  return (disaptch: Dispatch<HomeItemsActions>) => {
    disaptch(changeActiveHomeItem(id));
  };
};
