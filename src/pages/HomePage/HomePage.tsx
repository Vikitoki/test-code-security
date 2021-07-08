import React from "react";
import { FC } from "react";
import { HomeTab } from "../../components/Tabs/HomeTab/HomeTab";
import { HomeFormContainer } from "../../components/Form/FormContainers/HomeFormContainer";

import "./HomePage.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHomeItems } from "../../services/rest/homeItemsActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { changeSaveDataStatus } from "../../store/homeItems/action-creators";

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { error, homeList, loading, activeItem } = useTypedSelector(
    (state) => state.homeItems
  );
  const { saveDataStatus } = useTypedSelector((state) => state.homeItems);

  useEffect(() => {
    if (homeList.length === 0) {
      dispatch(getHomeItems());
    }
  }, [dispatch, homeList.length]);

  useEffect(() => {
    if (saveDataStatus) {
      setTimeout(() => {
        dispatch(changeSaveDataStatus());
      }, 5000);
    }
  }, [saveDataStatus, dispatch]);

  return (
    <section className="home-page">
      <div className="home-page__container container">
        <h2 className="home-page__title">Список свойств и элементов</h2>
        <div className="home-page__content content-home-page">
          {loading ? (
            <span className="status-text">Загрузка данных...</span>
          ) : error ? (
            <span className="status-text">{error}</span>
          ) : homeList.length !== 0 ? (
            <>
              <div className="content-home-page__main">
                <div className="content-home-page__left">
                  <ul className="content-home-page__list">
                    {homeList.map((item) => {
                      return (
                        <li key={item.name}>
                          <HomeTab
                            activeTab={item.name === activeItem?.name}
                            tabInfo={item}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="content-home-page__right">
                  <div className="content-home-page__form">
                    <HomeFormContainer />
                  </div>
                </div>
              </div>
              {saveDataStatus && (
                <div className="content-home-page__status">
                  Ваши данные были успешно сохранены. Сообщение пропадёт
                  автоматически через 5 секунды
                </div>
              )}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};
