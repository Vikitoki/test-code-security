import React from "react";
import { FC } from "react";
import { Formik, Form } from "formik";

import PencilImage from "../../../images/pencil.svg";
import CloseImage from "../../../images/close.svg";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IHomeListItemData } from "../../../types/homeItems";
import { FormControl } from "../FormControl/FormControl";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { postNewHomeItems } from "../../../services/rest/homeItemsActions";

export const HomeFormContainer: FC = () => {
  const dispatch = useDispatch();
  const { activeItem } = useTypedSelector((state) => state.homeItems);
  const [disabledState, setdDisabledState] = useState<boolean>(true);
  const [initialFormValues, setInitialFormValues] = useState<IHomeListItemData>(
    activeItem.data
  );

  useEffect(() => {
    setInitialFormValues(activeItem.data);
    setdDisabledState(true);
  }, [activeItem]);

  const initialValues: IHomeListItemData = initialFormValues;

  const onSubmit = (values: IHomeListItemData, { setTouched }: any) => {
    setTouched({});
    setdDisabledState((prev) => !prev);
    dispatch(postNewHomeItems(values));
  };

  const btnSetHandler = () => {
    setdDisabledState((prev) => !prev);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {(formik) => {
        return (
          <Form className="form">
            <div className="form__items">
              {Object.keys(activeItem.data).length !== 0
                ? Object.keys(activeItem.data).map((item, index) => {
                    return (
                      <FormControl
                        key={item}
                        control="textArea"
                        name={item}
                        labelText={`Свойство ${index + 1}`}
                        disabled={disabledState}
                      />
                    );
                  })
                : null}
            </div>
            {disabledState ? (
              <button
                onClick={btnSetHandler}
                type="button"
                className="form__actions"
              >
                <img src={PencilImage} alt="" />
              </button>
            ) : (
              <button
                onClick={btnSetHandler}
                type="button"
                className="form__actions"
              >
                <img src={CloseImage} alt="" />
              </button>
            )}
            <div className="form__btns">
              <button
                type="submit"
                className="btn btn_white-outline"
                disabled={Object.keys(formik.touched).length === 0}
              >
                Сохранить
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
