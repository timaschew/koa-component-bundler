
/*
 * Dependancies
 */

var app = module.exports = require('./app');

// spin up app
if (!module.parent) {
  var port = process.env.PORT || 3000;
  app.listen(port, function(err) {
    if (err) throw err;
    console.log('%s listening on port %s.', (app.name || 'SPA Site'), port);
  });
}
