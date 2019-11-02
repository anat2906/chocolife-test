import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Input, ContactCard } from "../components";

import ContactsStore from "../mobx/stores/ContactsStore";
import FavoriteIcon from "../resources/icons/icon-favorite.svg";
import SortIcon from "../resources/icons/icon-sort.svg";
import SortReverseIcon from "../resources/icons/icon-sort-reverse.svg";

export default function ContactsPage(props) {
  const initState = ContactsStore.create()
  const [contacts, getContacts] = useState(initState)

  return (
    <Layout>
      <SSearchPanel>
        <SSearch>                                                                                                                                                                                                                                                                                                           
          <Input type="text" placeholder="type to search..." />
        </SSearch>
        <SSearchOptions>
          <SLink>
            <SIcon src={FavoriteIcon} />
          </SLink>
          <SLink>
            <SIcon src={SortIcon} />
          </SLink>
          <SLink>
            <SIcon src={SortReverseIcon} />
          </SLink>
        </SSearchOptions>
      </SSearchPanel>
      <SCardsWrapper>
        <SCardWrapper>
          <ContactCard />
        </SCardWrapper>
        <SCardWrapper>
          <ContactCard />
        </SCardWrapper>
        <SCardWrapper>
          <ContactCard />
        </SCardWrapper>
        <SCardWrapper>
          <ContactCard />
        </SCardWrapper>
        <SCardWrapper>
          <ContactCard />
        </SCardWrapper>
        <SCardWrapper>
          <ContactCard />
        </SCardWrapper>
        <SCardWrapper>
          <ContactCard />
        </SCardWrapper>
        <SCardWrapper>
          <ContactCard />
        </SCardWrapper>
      </SCardsWrapper>
    </Layout>
  );
}

const SSearchPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SSearch = styled.div`
  width: 50%;
`;

const SSearchOptions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SIcon = styled.img`
  height: 40px;
  width: 40px;
`;

const SLink = styled.a`
  outline: none;
  cursor: pointer;
  margin-right: 16px;
`;

const SCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SCardWrapper = styled.div`
  width: 24%;
  height: auto;
  padding: 21px 26px;
`;
