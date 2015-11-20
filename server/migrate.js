var app = require(require('path').resolve(__dirname, 'server'));
var ds = app.dataSources.dev;

function migrate() {
  var models = require('./model-config.json');
  for (var model in models) {
    console.log(model);
    ds.autoupdate(model, function () {
    });
  }
}

ds.connected ? migrate() : ds.once('connected', migrate);
