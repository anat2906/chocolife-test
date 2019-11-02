import { types } from "mobx-state-tree";
import axios from "axios";
import ContactModel from "../models/ContactModel";
import BASE_URL from "../../config/urls";

export const ContactsStore = types
  .model({
    contacts: types.array(ContactModel)
  })
  .actions(self => {
    async function getContacts() {
      await axios
        .get(BASE_URL)
        .then(res => {
          self.contacts = res.data;
        })
        .then(localStorage.setItem("contacts", JSON.stringify(self.contacts)))
        .catch(err => {
          console.log(err);
        });
    }
  });
