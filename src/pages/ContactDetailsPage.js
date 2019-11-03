import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Button, FormField, Layout } from "../components";
import { FavouriteIcon } from "../components/icons";
import { contactsStore } from "../mobx";

export default function ContactDetailsPage(props) {
  const initialVals = contactsStore.contact_details;
  useEffect(() => {
    contactsStore.getContactDetails(props.match.params.handle);
  }, []);
  return (
    <Layout>
      <SAvatarWrapper>
        <SAvatar avatar={props.avatar} />
        <SFavoriteBtn
          onClick={() => {
            contactsStore.setFavorite();
          }}
        >
          <FavouriteIcon />
        </SFavoriteBtn>
      </SAvatarWrapper>
      <SDetailsWrapper>
        <Formik
          initialValues={initialVals}
          validationSchema={ValidationSchema}
          onSubmit={values => {
            contactsStore.setContactsDetails(values);
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
  );
}

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  email: Yup.string()
    .email("Please, provide a valid email")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  website: Yup.string().required("Website is required")
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
  background-image: url(https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background: #ccc;
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
    fill: ${contactsStore.contact_details.isFavorite ? "red" : "black"};
  }
  :hover {
    svg {
      fill: red;
    }
  }
`;
