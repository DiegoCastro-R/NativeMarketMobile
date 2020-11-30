import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProducts1606346467411 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'ProductName',
            type: 'varchar',
          },
          {
            name: 'ProductDescription',
            type: 'varchar',
          },
          {
            name: 'Price',
            type: 'varchar',
          },
          {
            name: 'categoryId',
            type: 'varchar',
          },
          {
            name: 'ProductImage',
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
    await queryRunner.dropTable('products');
  }
}
