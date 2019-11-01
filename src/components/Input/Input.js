import React from "react";
import styled from "styled-components";

export default function Input(props) {
  return <SInput {...props} />;
}

const SInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  background: #ffffff;
  border: 1px solid rgba(33, 33, 33, 0.35);
  border-radius: 2px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: rgba(33, 33, 33, 0.75);
`;
