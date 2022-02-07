import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private repository: SpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.repository.listAll();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
