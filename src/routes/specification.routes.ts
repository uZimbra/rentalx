import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRouter = Router();

specificationRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const repository = SpecificationsRepository.getInstance();

  const service = new CreateSpecificationService(repository);

  const specification = service.execute({ name, description });

  return response.status(201).json(specification);
});

export { specificationRouter };
