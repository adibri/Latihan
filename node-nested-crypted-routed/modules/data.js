const expres = require('express');
module.exports = {
  init: function (app) {
    const router = expres.Router();

    router.get('/data', function (request, response) {
      response.send('This root patch list data');
    });

    app.use('/data', router);
  },
};
