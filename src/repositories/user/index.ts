import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { IUserInterface, IUserInterfaceUpdate, IUserRepo } from "./interface";

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  createUser = async (user: IUserInterface) => this.ormRepository.save(user);
  getUsers = async () => this.ormRepository.find();
  findOne = async (email: string) =>
    this.ormRepository
      .createQueryBuilder("user")
      .addSelect("user.password")
      .where("user.email = :email", { email })
      .getOne();
  findById = async (uuid: string) =>
    this.ormRepository
      .createQueryBuilder("user")
      .where("user.uuid = :uuid", { uuid })
      .getOne();
  updateName = async (uuid: string, name: IUserInterfaceUpdate) =>
    this.ormRepository
      .createQueryBuilder()
      .update("user")
      .set({ name })
      .where("uuid = :uuid", { uuid })
      .execute();
  updateEmail = async (uuid: string, email: string) =>
    this.ormRepository
      .createQueryBuilder()
      .update("user")
      .set({ email })
      .where("uuid = :uuid", { uuid })
      .execute();
  updatePassword = async (uuid: string, password: string) =>
    this.ormRepository
      .createQueryBuilder()
      .update("user")
      .set({ password })
      .where("uuid = :uuid", { uuid })
      .execute();
  deleteUser = async (uuid: string) =>
    this.ormRepository
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("uuid = :uuid", { uuid })
      .execute();
}

export { UserRepository };
