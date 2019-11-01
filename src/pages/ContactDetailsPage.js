import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Input, Button } from "../components";

import FavoriteIcon from "../resources/icons/icon-favorite.svg";

export default function ContactDetailsPage(props) {
  return (
    <Layout>
      <SAvatarWrapper>
        <SAvatar avatar={props.avatar} />
        <a>
          <SFavoriteBtn src={FavoriteIcon} />
        </a>
      </SAvatarWrapper>
      <SDetailsWrapper>
        <SInputsWrapper>
          <SInputWrapper>
            <SLabel>First Name</SLabel>
            <Input type="text" placeholder="First Name" />
          </SInputWrapper>
          <SInputWrapper>
            <SLabel>City</SLabel>
            <Input type="text" placeholder="First Name" />
          </SInputWrapper>
        </SInputsWrapper>
        <SInputsWrapper>
          <SInputWrapper>
            <SLabel>Phone Number</SLabel>
            <Input type="text" placeholder="First Name" />
          </SInputWrapper>
          <SInputWrapper>
            <SLabel>Website</SLabel>
            <Input type="text" placeholder="First Name" />
          </SInputWrapper>
        </SInputsWrapper>
        <SInputsWrapper>
          <SInputWrapper>
            <SLabel>Last Name</SLabel>
            <Input type="text" placeholder="First Name" />
          </SInputWrapper>
          <SInputWrapper>
            <SLabel>Country</SLabel>
            <Input type="text" placeholder="First Name" />
          </SInputWrapper>
        </SInputsWrapper>
        <SInputsWrapper>
          <SInputWrapper>
            <SLabel>Email</SLabel>
            <Input type="text" placeholder="First Name" />
          </SInputWrapper>
          <SInputWrapper>
            <Button small>Save Contact</Button>
          </SInputWrapper>
        </SInputsWrapper>
      </SDetailsWrapper>
    </Layout>
  );
}

const SDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 16px;
`;

const SAvatarWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const SInputsWrapper = styled.div`
  display: flex;
  padding-top: 27px;
  align-items: flex-end;
`;

const SInputWrapper = styled.div`
  width: 50%;
  padding-right: 43px;
`;

const SAvatar = styled.div`
  width: 228px;
  min-width: 228px;
  height: 146px;
  background-image: url(https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background: #ccc;
  border-radius: 4px;
`;

const SFavoriteBtn = styled.img`
  width: 70px;
  height: 64.4px;
  margin-left: 26px;
`;

const SLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: rgba(33, 33, 33, 0.75);
`;
