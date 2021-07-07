import React from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { getNewActiveHomeItem } from "../../../services/rest/homeItemsActions";
import { IHomeListItem } from "../../../types/homeItems";

import "./HomeTab.scss";

interface HomeTabProps {
  tabInfo: IHomeListItem;
  activeTab: boolean;
}

export const HomeTab: FC<HomeTabProps> = ({ tabInfo, activeTab }) => {
  const dispatch = useDispatch();
  const { id, name } = tabInfo;

  const tabButtonHandler = () => {
    dispatch(getNewActiveHomeItem(id));
  };

  return (
    <button
      disabled={activeTab}
      type="button"
      className={`home-tab ${activeTab ? "active" : ""}`}
      onClick={tabButtonHandler}
    >
      <span className={`home-tab__text ${activeTab ? "active" : ""}`}>
        {name}
      </span>
    </button>
  );
};
