"use strict";

module.exports = (err, callback) => {
	if(errors.hasOwnProperty(err)){
	callback(null, errors[err]);
	} else {
		callback(new Error('Error code #' + err + ' not in database'));
	}
};
