import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoryRouter = Router();

categoryRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoryRouter.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoryRouter };
