import React from "react";
import { FC } from "react";
import { Formik, Form } from "formik";

import PencilImage from "../../../images/pencil.svg";
import CloseImage from "../../../images/close.svg";

export const HomeFormContainer: FC = () => {
  const initialValues = {};

  const onSubmit = (values: any) => {};

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form className="form">
            <div className="form__items">
              <div className="form__item">
                <label className="form__label" htmlFor="#">
                  Свойство 1
                </label>
                <input className="form__input" type="text" />
              </div>
              <div className="form__item">
                <label className="form__label" htmlFor="#">
                  Свойство 2
                </label>
                <input className="form__input" type="text" />
              </div>
            </div>
            <div className="form__btns">
              <button type="button" className="btn btn_white-outline">
                Сохранить
              </button>
            </div>
            <button type="button" className="form__actions">
              <img src={PencilImage} alt="" />
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
