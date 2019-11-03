import { types } from "mobx-state-tree";

export const ContactModel = types
  .model({
    id: types.number,
    firstName: types.string,
    lastName: types.string,
    city: types.string,
    country: types.string,
    phoneNumber: types.string,
    email: types.string,
    website: types.string,
    image: types.string,
    isFavorite: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleFavorite() {
      self.isFavorite = !self.isFavorite;
    },
    setContactDetails(values) {
      self.firstName = values.firstName;
      self.lastName = values.lastName;
      self.city = values.city;
      self.country = values.country;
      self.phoneNumber = values.phoneNumber;
      self.website = values.website;
      self.email = values.email;
    }
  }));
