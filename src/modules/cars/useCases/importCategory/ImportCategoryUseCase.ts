import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}
@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];

      const stream = fs.createReadStream(file.path);

      const parsedFile = parse();

      stream.pipe(parsedFile);

      parsedFile
        .on("data", async (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const categoryAlreadyExist = await this.categoriesRepository.findByName(
        name
      );

      if (!categoryAlreadyExist) {
        await this.categoriesRepository.create({ name, description });
      }
    });
  }
}

export { ImportCategoryUseCase };
