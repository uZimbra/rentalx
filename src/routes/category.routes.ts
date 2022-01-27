import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoryRouter = Router();

categoryRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const repository = CategoriesRepository.getInstance();

  const service = new CreateCategoryService(repository);

  const category = service.execute({ name, description });

  return response.status(201).json(category);
});

categoryRouter.get("/", (request, response) => {
  const repository = CategoriesRepository.getInstance();

  const categories = repository.listAll();

  return response.json(categories);
});

export { categoryRouter };
