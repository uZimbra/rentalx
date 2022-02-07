import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private repository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): Specification {
    const specificationAlreadyExists = this.repository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    const specification = this.repository.create({ name, description });

    return specification;
  }
}

export { CreateSpecificationUseCase };
