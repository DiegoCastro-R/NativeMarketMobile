import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategorys1606344945683 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'categorys',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'CategoryName',
            type: 'varchar',
          },
          {
            name: 'Description',
            type: 'varchar',
          },
          {
            name: 'ParentId',
            type: 'varchar',
          },
          {
            name: 'Status',
            type: 'varchar',
          },
          {
            name: 'CategoryImage',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categorys');
  }
}
