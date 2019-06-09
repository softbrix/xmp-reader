
const fs = require('fs');

module.exports = (file) => new Promise((resolve, reject) => {
	fs.readFile(file, (err, data) => {
		if (err) return reject(err);
		resolve(data);
	});
});