import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Specification;
  // listAll(): Specification[];
  findByName(name: string): Specification;
}

export { ICreateSpecificationDTO, ISpecificationRepository };
