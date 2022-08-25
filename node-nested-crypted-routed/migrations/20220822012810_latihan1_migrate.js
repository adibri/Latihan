/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable('trn_documents', (table) => {
    table.charset('utf8mb3');

    table.bigint('id').notNullable();
    table.string('user_id').notNullable();
    table.string('document_id').notNullable();
    table.bigInteger('ms_module_id').notNullable();
    table.foreign('ms_module_id').references('mst_document_module');
    table.bigInteger('document_type_id').notNullable();
    table.foreign('document_type_id').references('mst_document_type');
  });

  await knex.schema
    .alterTable('trn_documents', (table) => {
      table.primary('id', {
        storageEngineIndexType: 'BTREE',
      });
      table.index('document_type_id', {
        constraintName: 'fk_tr_document_document_type_1',
        storageEngineIndexType: 'BTREE',
      });
      table.index('ms_module_id', {
        constraintName: 'fk_tr_document_ms_module_1',
        storageEngineIndexType: 'BTREE',
      });
    })
    .then(() => {
      console.log('trn_documents has been successfully created');
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('trn_documents has been successfully created');
    });

  return true;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable('trn_documents');
};
