import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const repository = CategoriesRepository.getInstance();

const useCase = new ListCategoriesUseCase(repository);

const listCategoriesController = new ListCategoriesController(useCase);

export { listCategoriesController };
