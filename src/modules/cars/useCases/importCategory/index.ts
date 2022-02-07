import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

function importCategoryController(): ImportCategoryController {
  const repository = new CategoriesRepository();

  const useCase = new ImportCategoryUseCase(repository);

  const importCategoryController = new ImportCategoryController(useCase);

  return importCategoryController;
}

export { importCategoryController };
