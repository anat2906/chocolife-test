import { useObserver } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import BASE_URL from "../config/urls";
import { ContactCard, Input, Layout } from "../components";
import { ContactsStore } from "../mobx/stores/ContactsStore";
import FavoriteIcon from "../resources/icons/icon-favorite.svg";
import SortReverseIcon from "../resources/icons/icon-sort-reverse.svg";
import SortIcon from "../resources/icons/icon-sort.svg";

const contactsStore = ContactsStore.create();

function fetchContacts() {
  axios
    .get(BASE_URL)
    .then(response => {
      contactsStore.setContacts(response.data.data);
      return;
    })
    .catch(error => {
      console.error(error);
    });
}

export function ContactsPage() {
  useEffect(() => {
    fetchContacts();
  }, []);

  const [contacts, setContacts] = useState(contactsStore.contacts);

  function searchContacts(str) {
    console.log(str);
    str === ""
      ? setContacts(contactsStore.contacts)
      : setContacts(
          contacts.filter(
            c =>
              c.firstName.toLowerCase().startsWith(str.toLowerCase()) |
              c.lastName.toLowerCase().startsWith(str.toLowerCase())
          )
        );
  }

  return useObserver(() => (
    <Layout>
      <SSearchPanel>
        <SSearch>
          <Input
            type="text"
            placeholder="type to search..."
            onChange={e => {
              searchContacts(e.target.value);
            }}
          />
        </SSearch>
        <SSearchOptions>
          <SLink
            onClick={e => {
              setContacts(contactsStore.onlyFavorite);
            }}
          >
            <SIcon src={FavoriteIcon} />
          </SLink>
          <SLink
            onClick={e => {
              setContacts(contactsStore.alphabetOrder);
            }}
          >
            <SIcon src={SortIcon} />
          </SLink>
          <SLink
            onClick={e => {
              setContacts(contactsStore.reverseAlphaberOrder);
            }}
          >
            <SIcon src={SortReverseIcon} />
          </SLink>
        </SSearchOptions>
      </SSearchPanel>
      <SCardsWrapper>
        {contacts.map(c => {
          return (
            <SCardWrapper key={c.id}>
              <ContactCard user={c} />
            </SCardWrapper>
          );
        })}
      </SCardsWrapper>
    </Layout>
  ));
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
