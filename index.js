'use strict';
const got = require('got');
const queryString = require('query-string');

module.exports = function (id, opts) {
	opts = Object.assign({
		lang: opts.locale || 'en'
	});

	if (typeof id === 'undefined') {
		throw new TypeError('Expected a shipment or item identifier');
	}

	return got(`https://tracking.bring.com/tracking.json?q=${id}&${queryString.stringify(opts)}`, {json: true}).then(res => res.body);
};
