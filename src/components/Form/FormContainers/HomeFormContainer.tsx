import React from "react";
import { FC } from "react";
import { Formik, Form } from "formik";

import PencilImage from "../../../images/pencil.svg";
import CloseImage from "../../../images/close.svg";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IHomeListItemData } from "../../../types/homeItems";
import { FormControl } from "../FormControl/FormControl";

export const HomeFormContainer: FC = () => {
  const { activeItem } = useTypedSelector((state) => state.homeItems);

  const initialValues: IHomeListItemData = activeItem ? activeItem.data : {};

  const onSubmit = (values: IHomeListItemData) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form className="form">
            <div className="form__items">
              {activeItem
                ? Object.keys(activeItem.data).map((item, index) => {
                    return (
                      <FormControl
                        key={item}
                        control="input"
                        name={item}
                        labelText={`Свойство ${index + 1}`}
                      />
                    );
                  })
                : null}
            </div>
            <div className="form__btns">
              <button type="submit" className="btn btn_white-outline">
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
