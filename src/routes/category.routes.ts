import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoryRouter = Router();

categoryRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoryRouter.get("/", (request, response) => {
  const repository = CategoriesRepository.getInstance();

  const categories = repository.listAll();

  return response.json(categories);
});

export { categoryRouter };
