import axios from "axios";
import { types } from "mobx-state-tree";
import BASE_URL from "../../config/urls";
import { ContactModel } from "../models/ContactModel";

export const ContactsStore = types
  .model({
    contacts: types.optional(types.array(ContactModel), []),
    contact_details: types.optional(types.reference(ContactModel), {}),
    isReverse: types.optional(types.boolean, false),
    isFavorite: types.optional(types.boolean, false),
    queryString: types.optional(types.string, "")
  })
  .actions(self => ({
    getContacts() {
      if (self.contacts && self.contacts.length) return;
      axios
        .get(BASE_URL)
        .then(response => {
          self.setContacts(response.data.data);
          return;
        })
        .catch(error => {
          console.error(error);
        });
    },
    setContacts(contacts) {
      self.contacts = contacts;
    },
    setReverse() {
      self.isReverse = true;
    },
    setAlphabet() {
      self.isReverse = false;
    },
    toggleFavorite() {
      self.isFavorite = !self.isFavorite;
    },
    setQuerySting(q) {
      self.queryString = q;
    },
    setContactsDetails(obj) {
      self.contact_details = obj;
    },
    setFavorite() {
      self.contact_details.isFavorite = !self.contact_details.isFavorite;
    },
    getContactDetails(id) {
      console.log("getContact", id);
      const contact = self.contacts.find(c => c.id === id);
      console.log(self.contacts);
      this.setContactsDetails(contact);
    }
  }))
  .views(self => ({
    normaliziedData() {
      let results = self.contacts.sort(function(a, b) {
        if (a.firstName < b.firstName) return -1;
        else if (a.firstName > b.firstName) return 1;
        return 0;
      });
      if (self.isReverse) {
        results = results.reverse();
      }
      if (self.isFavorite) {
        results = results.filter(r => r.isFavorite);
      }
      if (self.queryString) {
        results = results.filter(r => {
          const str = self.queryString.toLowerCase();
          const fn = r.firstName.toLowerCase();
          const ln = r.lastName.toLowerCase();
          return fn.startsWith(str) || ln.startsWith(str);
        });
      }

      return results;
    }
  }));
