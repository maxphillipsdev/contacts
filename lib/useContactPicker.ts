import { useState } from "react";

interface Props {
  opts?: IContactPickerOptions;
  properties: string[];
}

interface IContactPickerOptions {
  multiple?: boolean;
}

const useContactPicker = ({ opts = { multiple: true }, properties }: Props) => {
  const supported: boolean =
    "contacts" in navigator && "ContactsManager" in window;

  const [loading, setLoading] = useState(false);
  const getContacts = async (): Promise<any> => {
    setLoading(true);
    try {
      const contacts = await navigator.contacts.select(properties, opts);
      setLoading(false);
      return contacts;
    } catch (ex) {
      setLoading(false);
    }
  };

  return { supported, getContacts, loading };
};

export default useContactPicker;
