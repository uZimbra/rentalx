import { Router } from "express";

const categoryRouter = Router();

const categories = [];

categoryRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = {
    name,
    description,
  };

  categories.push(category);

  return response.status(201).json(category);
});

export { categoryRouter };
