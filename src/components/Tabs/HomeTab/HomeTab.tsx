import React from "react";
import { FC } from "react";

import "./HomeTab.scss";

interface HomeTabProps {
  name: string;
  activeTab: boolean;
}

export const HomeTab: FC<HomeTabProps> = ({ name, activeTab }) => {
  return (
    <button type="button" className={`home-tab ${activeTab ? "active" : ""}`}>
      <span className={`home-tab__text ${activeTab ? "active" : ""}`}>
        {name}
      </span>
    </button>
  );
};
