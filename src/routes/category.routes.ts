import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoryRouter = Router();

const upload = multer({
  dest: "./tmp",
});

categoryRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoryRouter.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoryRouter.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoryRouter };
