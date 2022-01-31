import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const useCase = new ImportCategoryUseCase();

const importCategoryController = new ImportCategoryController(useCase);

export { importCategoryController };
