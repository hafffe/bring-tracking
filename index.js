'use strict';
const got = require('got');

module.exports = function (id) {
	if (typeof id === 'undefined') {
		throw new TypeError('Expected a shipment or item identifier');
	}

	return got(`https://tracking.bring.com/tracking.json?q=${id}`, {json: true}).then(res => res.body);
};
