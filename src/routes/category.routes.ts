import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoryRouter = Router();

categoryRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const repository = new CategoriesRepository();

  const category = repository.create({ name, description });

  return response.status(201).json(category);
});

export { categoryRouter };
