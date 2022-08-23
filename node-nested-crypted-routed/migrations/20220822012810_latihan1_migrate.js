/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  (async function () {
    return await knex.raw(`
      DROP TABLE IF EXISTS "mst_document_module";
      CREATE TABLE "mst_document_module"  (
        "document_type_id" bigint(20) NOT NULL,
        "ms_module_id" bigint(20) NOT NULL,
        INDEX "fk_ms_document_module_document_type_1" ("document_type_id") USING BTREE,
        INDEX "fk_ms_document_module_ms_module_1"("ms_module_id") USING BTREE,
        CONSTRAINT "fk_ms_document_module_document_type_1" FOREIGN KEY ("document_type_id") REFERENCES "mst_document_type" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
        CONSTRAINT "fk_ms_document_module_ms_module_1" FOREIGN KEY ("ms_module_id") REFERENCES "mst_module" ("id") ON DELETE RESTRICT ON UPDATE RESTRICTß
      ) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;
    `);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  (async function (params) {});
};
