import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategory1644239036689 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "Name", type: "varchar" },
          { name: "description", type: "varchar" },
          { name: "create_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }
}
