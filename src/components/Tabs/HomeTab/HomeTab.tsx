import React from "react";
import { FC } from "react";

import "./HomeTab.scss";

export const HomeTab: FC = () => {
  return (
    <button type="button" className="home-tab">
      <span className="home-tab__text">Элемент 1</span>
    </button>
  );
};
