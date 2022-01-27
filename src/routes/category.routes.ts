import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoryRouter = Router();

categoryRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const repository = CategoriesRepository.getInstance();

  const categoryAlreadyExists = repository.findByName(name);

  if (categoryAlreadyExists) {
    // throw new Error("Category already exists!");
    return response.status(400).json({ error: "Category already exists!" });
  }

  const category = repository.create({ name, description });

  return response.status(201).json(category);
});

categoryRouter.get("/", (request, response) => {
  const repository = CategoriesRepository.getInstance();

  const categories = repository.listAll();

  return response.json(categories);
});

export { categoryRouter };
