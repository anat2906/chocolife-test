import { onSnapshot } from "mobx-state-tree";
import { ContactsStore } from "./stores/ContactsStore";

let initialData = {};

if (localStorage.getItem("contactsStore")) {
  initialData = JSON.parse(localStorage.getItem("contactsStore"));
}

export const contactsStore = ContactsStore.create(initialData);

onSnapshot(contactsStore, snapshot => {
  console.log(snapshot);
  localStorage.setItem("contactsStore", JSON.stringify(snapshot));
});
