import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
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
  const { file } = request;

  console.log(file);

  return response.status(201).send();
});

export { categoryRouter };
