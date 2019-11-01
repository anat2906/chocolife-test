import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LikeIcon from "../../resources/icons/icon-like.svg";
import LocationIcon from "../../resources/icons/icon-location.svg";
import PhoneIcon from "../../resources/icons/icon-phone.svg";
import WebsiteIcon from "../../resources/icons/icon-website.svg";
import MailIcon from "../../resources/icons/icon-mail.svg";

export default function ContactCard(props) {
  return (
    <Link to={"/details"}>
      <SCard>
        <SImg avatar={props.avatar} />
        <SInfoWrapper>
          <SName>
            <h5>Vanessa Heartmann</h5>
            <img src={LikeIcon} />
          </SName>
          <SContactInfo>
            <img src={LocationIcon} />
            <span>Address</span>
          </SContactInfo>
          <SContactInfo>
            <img src={PhoneIcon} />
            <span>+996 555678747</span>
          </SContactInfo>
          <SContactInfo>
            <img src={WebsiteIcon} />
            <span>Website</span>
          </SContactInfo>
          <SContactInfo>
            <img src={MailIcon} />
            <span>123@mail.com</span>
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

const SImg = styled.div`
  width: 100%;
  height: 134px;
  background-image: ${props =>
    props.avatar
      ? `url(${props.avatar})`
      : "url(https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    height: 100%;
    width: auto;
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
