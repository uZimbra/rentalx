import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private repository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): Category {
    const categoryAlreadyExists = this.repository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    const category = this.repository.create({ name, description });

    return category;
  }
}

export { CreateCategoryUseCase };
