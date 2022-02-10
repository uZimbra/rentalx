import { Router } from "express";
import { categoryRouter } from "./category.routes";
import { specificationRouter } from "./specification.routes";
import { userRouter } from "./user.routes";

const routes = Router();

routes.use("/category", categoryRouter);
routes.use("/specification", specificationRouter);
routes.use("/user", userRouter);

export { routes };
