import { useObserver } from "mobx-react-lite";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import styled from "styled-components";
import { ContactCard, Input, Layout } from "../components";
import { contactsStore } from "../mobx";
import { Link } from "react-router-dom";

import {
  FavouriteIcon,
  AlphabetSortIcon,
  ReverseSortIcon
} from "../components/icons";

export function ContactsPage() {
  useEffect(() => {
    contactsStore.getContacts();
  }, []);

  return useObserver(() => (
    <Layout>
      <SSearchPanel>
        <SSearch>
          <Input
            type="text"
            placeholder="type to search..."
            value={contactsStore.queryString}
            onChange={e => {
              contactsStore.setQuerySting(e.target.value);
            }}
          />
        </SSearch>
        <SSearchOptions>
          <SLink
            onClick={() => {
              contactsStore.toggleFavorite();
            }}
          >
            <SIcon active={contactsStore.isFavorite}>
              <FavouriteIcon />
            </SIcon>
          </SLink>
          <SLink
            onClick={() => {
              contactsStore.setAlphabet();
            }}
          >
            <SIcon active={!contactsStore.isReverse}>
              <AlphabetSortIcon />
            </SIcon>
          </SLink>
          <SLink onClick={() => contactsStore.setReverse()}>
            <SIcon active={contactsStore.isReverse}>
              <ReverseSortIcon />
            </SIcon>
          </SLink>
        </SSearchOptions>
      </SSearchPanel>
      <SCardsWrapper>
        {contactsStore.normaliziedData() &&
          contactsStore.normaliziedData().length ? (
            contactsStore.normaliziedData().map(c => {
              return (
                <SCardWrapper key={c.id}>
                  <Link to={`/details/${c.id}`}>
                    <ContactCard user={c} />
                  </Link>
                </SCardWrapper>
              );
            })
          ) : (
            <SMessage>No contacts found :(</SMessage>
          )}
      </SCardsWrapper>
    </Layout>
  ));
}

const SMessage = styled.h4`
  width: 100%;
  text-align: center;
  padding-top: 90px;
  color: rgba(33, 33, 33, 0.75);
`;

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

const SIcon = styled.div`
  height: 40px;
  width: 40px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${props => (props.active ? "#FF0000" : "#000000")};
  }
  :hover {
    svg {
      width: 100%;
      height: 100%;
      fill: red;
    }
  }
`;

const SLink = styled.a`
  outline: none;
  cursor: pointer;
  margin-right: 16px;
`;

const SCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-contect: center;
`;

const SCardWrapper = styled.div`
  width: 24%;
  height: auto;
  padding: 21px 26px;
`;
