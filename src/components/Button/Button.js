import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return <SButton {...props} />;
}

const SButton = styled.button`
  width: 100%;
  background: #212121;
  border: none;
  box-shadow: none;
  border-radius: 2px;
  color: white;
  padding-top: ${props => (props.sm ? "2px" : "9px")};
  padding-bottom: ${props => (props.sm ? "2px" : "9px")};
  font-size: ${props => (props.sm ? "14px" : "18px")};
  font-weight: ${props => (props.sm ? "normal" : 500)};
  line-height: ${props => (props.sm ? "16px" : "21px")};
  font-style: normal;
  text-align: center;
  cursor: pointer;
`;
