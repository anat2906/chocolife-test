import { useObserver } from "mobx-react-lite";
import { Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Button, FormField, Layout } from "../components";
import { FavouriteIcon } from "../components/icons";
import { contactsStore } from "../mobx";

export default function ContactDetailsPage(props) {
  const id = Number(props.match.params.handle);
  let initialVals = contactsStore.contactDetails(id)[0];

  return useObserver(() => (
    <Layout>
      <SAvatarWrapper>
        <SAvatar avatar={initialVals.image} />
        <SFavoriteBtn
          type="submit"
          onClick={() => {
            initialVals.toggleFavorite();
          }}
          favorite={initialVals.isFavorite}
        >
          <FavouriteIcon />
        </SFavoriteBtn>
      </SAvatarWrapper>
      <SDetailsWrapper>
        <Formik
          initialValues={initialVals}
          validationSchema={ValidationSchema}
          onSubmit={values => {
            initialVals.setContactDetails(values);
          }}
        >
          {(errors, touched) => (
            <Form>
              <SInputsWrapper>
                <SInputWrapper>
                  <FormField name="firstName" label="First Name" />
                </SInputWrapper>
                <SInputWrapper>
                  <FormField name="city" label="City" />
                </SInputWrapper>
              </SInputsWrapper>
              <SInputsWrapper>
                <SInputWrapper>
                  <FormField name="phoneNumber" label="Phone Number" />
                </SInputWrapper>
                <SInputWrapper>
                  <FormField name="website" label="Website" />
                </SInputWrapper>
              </SInputsWrapper>
              <SInputsWrapper>
                <SInputWrapper>
                  <FormField name="lastName" label="Last Name" />
                </SInputWrapper>
                <SInputWrapper>
                  <FormField name="country" label="Country" />
                </SInputWrapper>
              </SInputsWrapper>
              <SInputsWrapper>
                <SInputWrapper>
                  <FormField name="email" label="Email" />
                </SInputWrapper>
                <SInputWrapper>
                  <Button type="submit">Save Contact</Button>
                </SInputWrapper>
              </SInputsWrapper>
            </Form>
          )}
        </Formik>
      </SDetailsWrapper>
    </Layout>
  ));
}

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  email: Yup.string()
    .email("Please, provide a valid email")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .min(10, "Too short number"),
  website: Yup.string()
    .required("Website is required")
    .url("Please, provid a valid link")
});

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
  background-image: ${props => `url(${props.avatar})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #ccc;
  border-radius: 4px;
`;

const SFavoriteBtn = styled.button`
  width: 70px;
  height: 64.4px;
  margin-left: 26px;
  border: none;
  background: none;
  cursor: pointer;
  svg {
    fill: ${props => (props.favorite ? "red" : "black")};
  }
  :hover {
    svg {
      fill: ${props => (props.favorite ? "black" : "red")};
    }
  }
`;
