import React from "react";
import { FC } from "react";
import { Formik, Form } from "formik";

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
                <label htmlFor="#">Свойство 1</label>
                <input type="text" />
              </div>
              <div className="form__item">
                <label htmlFor="#">Свойство 2</label>
                <input type="text" />
              </div>
            </div>
            <div className="form__btns">
              <button type="button" className="btn">
                Сохранить
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
