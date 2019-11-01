import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";

export default function Layout(props) {
  return (
    <SLayout>
      <Header />
      <SMain>{props.children}</SMain>
    </SLayout>
  );
}

const SLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const SMain = styled.main`
  padding: 47px 50px;
 height: 100%;
`;
