(function() {
  var sa;

  sa = require('superagent');

  module.exports = (function() {
    return {
      send: function(method, url, data, headers, done) {
        var query, req;
        if (headers == null) {
          headers = null;
        }
        method = method.toLowerCase();
        if (typeof headers === 'function') {
          done = headers;
          headers = null;
        }
        query = ['get', 'delete'].indexOf(method) !== -1;
        req = sa[method](url);
        if (headers != null) {
          req.set(headers);
        }
        if (query) {
          req.query(data);
        } else {
          req.send(data);
        }
        return req.end(done);
      }
    };
  })();

}).call(this);
