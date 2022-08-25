// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // development: {
  client: 'mysql2',
  connection: process.env.DATABASE_URL || {
    host: '127.0.0.1',
    port: '3306',
    database: 'latihan',
    user: 'root',
    password: '',
    options: {
      encrypt: true,
    },
  },
  migrations: {
    tableName: 'latihan1_migrate',
  },
  // },
};
