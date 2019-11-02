import { types } from "mobx-state-tree";
import { ContactModel } from "../models/ContactModel";

export const ContactsStore = types
  .model({ contacts: types.array(ContactModel) })
  .actions(self => ({
    setContacts(contacts) {
      self.contacts = contacts;
    }
  }))
  .views(self => ({
    get alphabetOrder() {
      return self.contacts.sort(function(a, b) {
        if (a.firstName < b.firstName) return -1;
        else if (a.firstName > b.firstName) return 1;
        return 0;
      });
    },
    reverseAlphaberOrder() {
      return self.contacts
        .sort(function(a, b) {
          if (a.firstName < b.firstName) return -1;
          else if (a.firstName > b.firstName) return 1;
          return 0;
        })
        .reverse();
    },
    onlyFavorite() {
      return self.contacts.filter(c => c.isFavorite);
    }
  }));
