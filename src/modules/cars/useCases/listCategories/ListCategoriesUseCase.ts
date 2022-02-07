import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private repository: CategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.repository.listAll();

    return categories;
  }
}

export { ListCategoriesUseCase };
