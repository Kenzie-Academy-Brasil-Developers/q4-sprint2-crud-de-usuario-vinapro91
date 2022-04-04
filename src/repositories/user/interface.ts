import { DeleteResult, UpdateResult } from "typeorm";

interface IUserInterface {
  name: string;
  email: string;
  password?: string;
  isAdm: boolean;
  createdOn?: Date;
  updatedOn?: Date;
  uuid?: string;
}
interface IUserInterfaceUpdate {
  name?: string;
  email?: string;
  password?: string;
  isAdm?: boolean;
  createdOn?: Date;
  updatedOn?: Date;
  uuid?: string;
}

interface IUserRepo {
  createUser: (user: IUserInterface) => Promise<IUserInterface>;
  getUsers: () => Promise<IUserInterface[]>;
  findOne: (email: string) => Promise<IUserInterface>;
  findById: (uuid: string) => Promise<IUserInterface>;
  updateName: (
    uuid: string,
    name: IUserInterfaceUpdate
  ) => Promise<UpdateResult>;
  updateEmail: (uuid: string, email: string) => Promise<UpdateResult>;
  updatePassword: (uuid: string, password: string) => Promise<UpdateResult>;
  deleteUser: (uuid: string) => Promise<DeleteResult>;
}

export { IUserInterface, IUserRepo, IUserInterfaceUpdate };
