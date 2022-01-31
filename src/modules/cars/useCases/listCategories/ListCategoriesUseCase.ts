import { Category } from "../../models/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

class ListCategoriesUseCase {
  constructor(private repository: CategoriesRepository) {}

  execute(): Category[] {
    const categories = this.repository.listAll();

    return categories;
  }
}

export { ListCategoriesUseCase };
