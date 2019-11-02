import React, { createContext } from "react";
import faker from "faker";
import { types } from "mobx-state-tree";
import { flow } from "mobx";
// import { useLocalStore } from "mobx-react-lite";
import axios from "axios";
import { ContactModel } from "../models/ContactModel";
import BASE_URL from "../../config/urls";

const ContactsStore = types.array(ContactModel);

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    id: faker.random.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    country: faker.address.country(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.imageUrl(),
    isFavorite: faker.random.boolean()
  });
}

export const contactsStore = ContactsStore.create([...data]);
console.log(contactsStore);
