/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  (async function () {
    await knex.schema.createTable('player', (table) => {
      table
        .bigInteger('id')
        .primary('name', { constraintName: 'player', defferable: true })
        .unique();
      table.charset('nama', {
        constraintName: 'name-players-type',
        defferable: true,
      });
      table.charset('item', {
        constraintName: 'item-players-type',
        defferable: true,
      });
      table.string('email').notNullable();
      table.string('password').notNullable();
    });
    return true;
  })();
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  (async function (params) {
    await knex.schema.alterTable('player', (table) => {
      table.dropColumn('nama');
      table.dropColumn('item');
      table.dropColumn('email');
      table.dropColumn('password');
    });
    return true;
  })();
};
