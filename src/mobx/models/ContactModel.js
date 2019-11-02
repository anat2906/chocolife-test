import { types } from "mobx-state-tree";

export const ContactModel = types.model({
  id: types.number,
  firstName: types.string,
  lastName: types.string,
  city: types.string,
  country: types.string,
  phoneNumber: types.string,
  email: types.string,
  website: types.string,
  image: types.string
});
