import Dexie from "dexie";
import React from "react";

export class ContactsDB extends Dexie {
  contacts: Dexie.Table<IContact, number>;

  constructor() {
    super("ContactsDB");
    this.version(1).stores({
      contacts: "++id, givenName, familyName, organization, tel, email",
      //...other tables goes here...
    });
    // The following line is needed if your typescript
    // is compiled using babel instead of tsc:
    this.contacts = this.table("contacts");
  }
}

export interface IContact {
  id?: number;
  givenName: string;
  familyName: string;
  organization: string;
  tel: string;
  email: string;
}

const DBContext = React.createContext<ContactsDB | null>(null);

export default DBContext;
