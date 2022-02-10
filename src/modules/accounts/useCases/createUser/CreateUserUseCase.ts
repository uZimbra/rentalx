import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private repository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.repository.findByEmail(email);

    if (userAlreadyExists) throw new Error("User already exists!");

    const hashedPassword = await hash(password, 8);

    const user = await this.repository.create({
      name,
      email,
      password: hashedPassword,
      driver_license,
    });

    return user;
  }
}

export { CreateUserUseCase };
