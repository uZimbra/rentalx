import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

function listCategoriesController(): ListCategoriesController {
  const repository = new CategoriesRepository();

  const useCase = new ListCategoriesUseCase(repository);

  const listCategoriesController = new ListCategoriesController(useCase);

  return listCategoriesController;
}

export { listCategoriesController };
