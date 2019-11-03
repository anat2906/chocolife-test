import React from "react";
import { Field } from "formik";
import { Input } from "../index";
import styled from "styled-components";

export default function FormField(props) {
  return (
    <Field name={props.name}>
      {({ field, meta }) => (
        <>
          {meta.touched && meta.error ? (
            <SErrorMessage>{meta.error}</SErrorMessage>
          ) : (
            <SLabel>{props.label}</SLabel>
          )}
          <Input type="text" {...field} placeholder={props.label} />
        </>
      )}
    </Field>
  );
}

const SErrorMessage = styled.span`
  font-size: 13px;
  color: red;
`;

const SLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: rgba(33, 33, 33, 0.75);
`;
