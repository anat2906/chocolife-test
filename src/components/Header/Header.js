import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../resources/icons/icon-my-contacts.svg";

export default function Header() {
  return (
    <SHeader>
      <SLink to="/">
        <SLogo src={Logo} />
        <STitle>MyContacts</STitle>
      </SLink>
    </SHeader>
  );
}

const SHeader = styled.header`
  padding: 15px;
  background: #212121;
  color: white;
  display: flex;
`;
const STitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  margin: 0;
`;

const SLogo = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 9px;
`;

const SLink = styled(Link)`
  display: flex;
  color: white;
`;
