import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private repository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const categoryAlreadyExists = await this.repository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    const category = await this.repository.create({ name, description });

    return category;
  }
}

export { CreateCategoryUseCase };
