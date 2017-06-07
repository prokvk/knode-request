knode-request
=============

is a simple node module wrapper on [superagent](https://www.npmjs.com/package/superagent).

# Install:

```
npm install --save knode-request
```

# Usage:

This module provides a single function - `send` with parameters (in this order):
- method
- url
- data - object (can be null), all methods share this and knode-request handles proper sending per specified method
- headers - can be left out, otherwise object
- callback

# Sample:

```javascript
var req = require('knode-request');

//sample GET request
req.send('get', 'http://example.com', null, headers, function(err, res) {
  if (err) {
    console.log("ERROR: " + err);
  }
  console.log(res);
});

//sample GET request with headers object and data defined
req.send('get', 'http://example.com', {
  param: 1
}, {
  'Accept': 'application/json'
}, function(err, res) {
  if (err) {
    console.log("ERROR: " + err);
  }
  console.log(res);
});

//sample POST request without headers
req.send('post', 'http://example.com', {
  param: 1
}, function(err, res) {
  if (err) {
    console.log("ERROR: " + err);
  }
  console.log(res);
});
```