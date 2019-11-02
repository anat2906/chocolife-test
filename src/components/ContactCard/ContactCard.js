import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LikeIcon from "../../resources/icons/icon-like.svg";
import FavoriteIcon from "../../resources/icons/icon-favorite.svg";
import LocationIcon from "../../resources/icons/icon-location.svg";
import PhoneIcon from "../../resources/icons/icon-phone.svg";
import WebsiteIcon from "../../resources/icons/icon-website.svg";
import MailIcon from "../../resources/icons/icon-mail.svg";

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
    <Link to={"/details"}>
      <SCard>
        <SImg src={image} />
        <SInfoWrapper>
          <SName>
            <h5>{`${firstName} ${lastName}`}</h5>
            {isFavorite ? (
              <img src={FavoriteIcon} />
            ) : (
              <img src={LikeIcon} />
            )}
          </SName>
          <SContactInfo>
            <img src={LocationIcon} />
            <span>{`${city}, ${country}`}</span>
          </SContactInfo>
          <SContactInfo>
            <img src={PhoneIcon} />
            <span>{phoneNumber}</span>
          </SContactInfo>
          <SContactInfo>
            <img src={WebsiteIcon} />
            <span>{website}</span>
          </SContactInfo>
          <SContactInfo>
            <img src={MailIcon} />
            <span>{email}</span>
          </SContactInfo>
        </SInfoWrapper>
      </SCard>
    </Link>
  );
}

const SCard = styled.div`
  box-shadow: 1px 1px 3px rgba(33, 33, 33, 0.25);
  border-radius: 4px;
`;

const SImg = styled.img`
  width: 100%;
  height: 134px;
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
  img {
    height: 17px;
    width: 17px;
  }
`;

const SContactInfo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  img {
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
