import { Dispatch } from "react";
import {
  changeActiveHomeItem,
  changeInfoToHomeItem,
  changeSaveDataStatus,
  fetchHomeItemsListFailure,
  fetchHomeItemsListRequest,
  fetchHomeItemsListSuccess,
} from "../../store/homeItems/action-creators";
import {
  HomeItemsActions,
  IHomeListItem,
  IHomeListItemData,
} from "../../types/homeItems";
import { RootState } from "../../types/redux";

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

export const postNewHomeItems = (values: IHomeListItemData) => {
  return async (
    dispatch: Dispatch<HomeItemsActions>,
    getState: () => RootState
  ) => {
    try {
      dispatch(changeInfoToHomeItem(values));

      const newHomeList = getState().homeItems.activeItem;

      const response = await fetch(
        `http://localhost:8800/items/${newHomeList.id}`,
        {
          method: "PUT",
          body: JSON.stringify(newHomeList),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          "Произошла ошибка при отправке данных, потвторите попытку позже"
        );
      }

      dispatch(changeSaveDataStatus());
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
