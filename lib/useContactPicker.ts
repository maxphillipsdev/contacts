import { useState } from "react";

interface Props {
  opts?: IContactPickerOptions;
}

interface IContactPickerOptions {
  multiple?: boolean;
}

const useContactPicker = ({ opts = { multiple: true } }: Props) => {
  const supported: boolean =
    "contacts" in navigator && "ContactsManager" in window;
  const [props, setProps] = useState<string[]>([]);

  return { supported, opts };
};

export default useContactPicker;
