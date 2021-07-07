import React from "react";
import { FC } from "react";
import { HomeTab } from "../../components/Tabs/HomeTab/HomeTab";

import "./HomePage.scss";

export const HomePage: FC = () => {
  return (
    <section className="home-page">
      <div className="home-page__container">
        <h2 className="home-page__title">Список свойств и элементов</h2>
        <div className="home-page__content content-home-page">
          <div className="content-home-page__left">
            <div className="content-home-page__list">
              <li>
                <HomeTab />
              </li>
            </div>
          </div>
          <div className="content-home-page__right">
						<div className="content-home-page__form">
							
						</div>
						
					</div>
        </div>
      </div>
    </section>
  );
};
