module.exports = (promise, callback) => {
	if ('function' == typeof callback) promise.then(
		(data) => callback(null, data),
		(error) => callback(error)
	);
	return promise;
};