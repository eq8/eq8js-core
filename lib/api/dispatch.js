/*
 * eq8-core
 * Copyright(c) 2016 Benjamin Bartolome
 * Apache 2.0  Licensed
 */

'use strict';

module.exports = function exported() {
	return function dispatch(e, done) {
		var api = this;

		api.emit('dispatch', e, done);
	};
};