import { IUserInterface } from "../repositories/user/interface";

export const serializer = (data: IUserInterface) => {
  const output: IUserInterface = {
    name: data.name,
    email: data.email,
    isAdm: data.isAdm,
    createdOn: data.createdOn,
    updatedOn: data.updatedOn,
    uuid: data.uuid,
  };
  return output;
};
