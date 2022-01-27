import { Router } from "express";
import { categoryRouter } from "./category.routes";
import { specificationRouter } from "./specification.routes";

const routes = Router();

routes.use("/category", categoryRouter);
routes.use("/specification", specificationRouter);

export { routes };
