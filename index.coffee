sa = require 'superagent'

module.exports = do () ->
	send: (method, url, data, headers = null, done) ->
		method = method.toLowerCase()

		if typeof headers is 'function'
			done = headers
			headers = null

		query = ['get', 'delete'].indexOf(method) isnt -1

		req = sa[method] url
		req.set headers if headers?
		if query then req.query(data) else req.send(data)
		req.end done
