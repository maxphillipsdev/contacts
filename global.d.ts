type ContactsOptions = {
  multiple?: boolean;
}

type ContactsData = {
  getProperties() : Promise<string[]>;
  select(properties:string[], options?: ContactsOptions) : Promise<any>;
};

interface Navigator
{
  contacts? : ContactsData;
}
