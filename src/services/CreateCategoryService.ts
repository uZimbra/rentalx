import { Category } from "../models/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private repository: CategoriesRepository) {}

  execute({ name, description }: IRequest): Category {
    const categoryAlreadyExists = this.repository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    const category = this.repository.create({ name, description });

    return category;
  }
}

export { CreateCategoryService };
