import React from "react";
import { FC } from "react";
import { TextArea } from "../UI/TextArea";

interface FormControlProps {
  control: string;
  [key: string]: string | boolean;
}

export const FormControl: FC<FormControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case "textArea":
      return <TextArea {...rest} />;
    default:
      return null;
  }
};
