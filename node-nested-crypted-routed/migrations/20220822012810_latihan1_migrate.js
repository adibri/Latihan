/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  (async function () {
    await knex.schema.createTable('player', (table) => {
      table
        .bigInteger('id')
        .primary('name', { constraintName: 'player-name', defferable: true })
        .unique();
      table
        .string('nama')
        .primary('id', {
          constraintName: 'name-players-type-id',
          defferable: true,
          references: [
            {
              model: 'player',
              key: 'id',
            },
          ],
        })
        .unique();
      table
        .string('item')
        .primary('id', {
          constraintName: 'item-players-type-id',
          defferable: true,
          references: [
            {
              model: 'player',
              key: 'id',
            },
          ],
        })
        .unique();
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
