import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

function createCategoryController(): CreateCategoryController {
  const repository = new CategoriesRepository();

  const useCase = new CreateCategoryUseCase(repository);

  const createCategoryController = new CreateCategoryController(useCase);

  return createCategoryController;
}

export { createCategoryController };
