'use strict';

const Hapi = require('@hapi/hapi');
const MySQL = require('mysql');
const Joi = require('joi');
const Bcrypt = require('bcrypt');
// Create a server with a host and port
const server = new Hapi.Server({
  host: 'localhost',
  port: 3010,
});

const connection = MySQL.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'latihan',
});

connection.connect();

server.validator(Joi);

server.route({
  method: 'GET',
  path: '/helloworld',
  handler: function (request, h) {
    return 'hello world1';
  },
});

// Add the route
server.route({
  method: 'GET',
  path: '/users',
  handler: function (request, reply) {
    const data = reply.response(request.app);
    try {
      return new Promise((resolve, reject) => {
        connection.query(
          'SELECT uid, username FROM users',
          function (error, results, fields) {
            if (error) {
              throw error;
            } else {
              resolve(results);
            }
          }
        );
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      console.log(reply.entity);
    }
  },
});

server.route({
  method: 'GET',
  path: '/users/{uid}',
  handler: function (request, reply) {
    const uid = request.params.uid;
    try {
      return new Promise((resolve, reject) => {
        connection.query(
          `SELECT uid, username, email FROM users WHERE uid = ${uid}`,
          function (error, results, fields) {
            if (error) {
              throw error;
            } else {
              resolve(results);
            }
          }
        );
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      connection.end();
    }
  },
  config: {
    validate: {
      params: {
        uid: Joi.number().integer(),
      },
    },
  },
});

server.route({
  method: 'POST',
  path: '/signup',

  handler: function (request, reply) {
    const username = request.payload.username;
    const email = request.payload.email;
    const password = request.payload.password;

    var salt = Bcrypt.genSaltSync();
    var encryptedPassword = Bcrypt.hashSync(password, salt);

    var orgPassword = Bcrypt.compareSync(password, encryptedPassword);

    try {
      return new Promise((resolve, reject) => {
        connection.query(
          'INSERT INTO users (username,email,password) VALUES ("' +
            username +
            '","' +
            email +
            '","' +
            encryptedPassword +
            '")',
          function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            return resolve(results);
          }
        );
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      connection.end();
    }
  },
  config: {
    validate: {
      payload: Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/),
      }),
    },
  },
});

server.route({
  method: 'POST',
  path: '/sendMessage',
  handler: function (request, reply) {
    const uid = request.payload.uid;
    const message = request.payload.message;

    connection.query(
      'INSERT INTO messages (message,uid_fk) VALUES ("' +
        message +
        '","' +
        uid +
        '")',
      function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        reply(results);
      }
    );
  },
  config: {
    validate: {
      payload: Joi.object({
        uid: Joi.number().integer(),
        message: [Joi.string(), Joi.number()],
      }),
    },
  },
});

server.route({
  method: 'POST',
  path: '/messages',

  handler: function (request, reply) {
    const uid = request.payload.uid;
    console.log(uid);

    try {
      return new Promise((resolve, reject) => {
        connection.query(
          'SELECT * FROM messages WHERE uid_fk = "' + uid + '"',
          function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            resolve(results);
          }
        );
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      connection.end();
    }
  },
  config: {
    validate: {
      payload: Joi.object({
        uid: Joi.number().integer(),
      }),
    },
  },
});

server.route({
  method: 'DELETE',
  path: '/message/{uid}/{mid}',
  handler: function (request, reply) {
    const uid = request.params.uid;
    const mid = request.params.mid;

    console.log(uid + '---' + mid);

    try {
      return new Promise((resolve, reject) => {
        connection.query(
          'DELETE FROM messages WHERE uid_fk = "' +
            uid +
            '"AND mid = "' +
            mid +
            '"',
          function (error, result, fields) {
            if (error) throw error;

            if (result.affectedRows) {
              return resolve(true);
            } else {
              return resolve(false);
            }
          }
        );
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      connection.end();
    }
  },
  config: {
    validate: {
      params: {
        uid: Joi.number().integer(),
        mid: Joi.number().integer(),
      },
    },
  },
});

console.log('Server running at:', server.info.uri);
// Start the server
server.start((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server running at:', server.info.uri);
  }
});
