// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

import {
  FavouriteIcon,
  LocationIcon,
  PhoneIcon,
  WebsiteIcon,
  EmailIcon
} from "../icons";

export default function ContactCard(props) {
  const {
    image,
    firstName,
    lastName,
    city,
    country,
    phoneNumber,
    website,
    email,
    isFavorite
  } = props.user;
  return (
    <SCard>
      <SImg image={image} />
      <SInfoWrapper>
        <SName favourite={isFavorite}>
          <h5>{`${firstName} ${lastName}`}</h5>
          <FavouriteIcon />
        </SName>
        <SContactInfo>
          <LocationIcon />
          <span>{`${city}, ${country}`}</span>
        </SContactInfo>
        <SContactInfo>
          <PhoneIcon />
          <span>{phoneNumber}</span>
        </SContactInfo>
        <SContactInfo>
          <WebsiteIcon />
          <span>{website}</span>
        </SContactInfo>
        <SContactInfo>
          <EmailIcon />
          <span>{email}</span>
        </SContactInfo>
      </SInfoWrapper>
    </SCard>
  );
}

const SCard = styled.div`
  box-shadow: 1px 1px 3px rgba(33, 33, 33, 0.25);
  border-radius: 4px;
`;

const SImg = styled.div`
  width: 100%;
  height: 134px;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  backgrpund-repeat: no-repeat;
`;

const SName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 11px;
  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin: 0;
  }
  svg {
    height: 17px;
    width: 17px;
    fill: ${props => (props.favourite ? "red" : "black")}
`;

const SContactInfo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  svg {
    margin-right: 6px;
    height: 100%;
    width: auto;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
  }
`;

const SInfoWrapper = styled.div`
  padding: 9px 8px;
`;
