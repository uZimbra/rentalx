import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, password, email, driver_license } = request.body;
    const useCase = container.resolve(CreateUserUseCase);

    const user = await useCase.execute({
      name,
      username,
      password,
      email,
      driver_license,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
