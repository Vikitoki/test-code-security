import { Field } from "formik";
import React from "react";
import { ReactNode } from "react";
import { FC } from "react";

interface InputProps {
  [key: string]: string | ReactNode;
  labelText?: string;
  name?: string;
}

export const TextArea: FC<InputProps> = ({ labelText, name, ...rest }) => {
  return (
    <div className="form__item">
      {labelText && (
        <label className="form__label" htmlFor={name}>
          {labelText}
        </label>
      )}
      <Field
        as="textarea"
        placeholder="Введите текст"
        {...rest}
        id={name}
        name={name}
        className="form__input form__input_textarea"
        type="text"
      />
    </div>
  );
};
