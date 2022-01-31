import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const repository = SpecificationsRepository.getInstance();

const useCase = new CreateSpecificationUseCase(repository);

const createSpecificationController = new CreateSpecificationController(
  useCase
);

export { createSpecificationController };
