import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const repository = CategoriesRepository.getInstance();

const useCase = new ImportCategoryUseCase(repository);

const importCategoryController = new ImportCategoryController(useCase);

export { importCategoryController };
