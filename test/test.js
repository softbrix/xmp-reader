'use strict';

const
fs = require('fs'),
assert = require('assert'),
xmpReader = require('../');

describe('xmp-reader', function () {

	let fixture = __dirname + '/fixture/test.jpg';
	let buffer = new Buffer(65536);

	let assertData = (data, done) => {
		try {
			assert.equal(data.title, 'Title');
			assert.equal(data.description, 'Title');
			assert.equal(data.rating, 3);
			assert.equal(data.keywords[0], 'tag1');
			assert.equal(data.keywords[1], 'tag2');
			assert.equal(data.regionAreaX, 0.01),
		  assert.equal(data.regionAreaW, 0.05),
		  assert.equal(data.regionName, 'John Doe'),
		  assert.equal(data.regionType, 'Face'),
			done();
		} catch (err) {
			done(err);
		};
	}

	before(function(done) {
		fs.open(fixture, 'r', (err, fd) => {
			if (err) done(err);
			else fs.read(fd, buffer, 0, 65536, 0, (err, bytesRead, buffer) => done(err))
		});
	});

	it('should accept a file and a callback', function(done)	{
		xmpReader.fromFile(fixture, (err, data) => {
			if (err) done(err);
			else assertData(data, done);
		});
	});

	it('should accept a buffer and a callback', function(done)	{
		xmpReader.fromBuffer(buffer, (err, data) => {
			if (err) done(err);
			else assertData(data, done);
		});
	});

	it('should accept a file and return a promise', function(done)	{
		xmpReader.fromFile(fixture).then(
			(data) => assertData(data, done),
			(err) => done(err)
		);
	});

	it('should accept a buffer and return a promise', function(done)	{
		xmpReader.fromBuffer(buffer).then(
			(data) => assertData(data, done),
			(err) => done(err)
		);
	});

	xit('log', function()	{
		return xmpReader.fromBuffer(buffer).then(console.log);
	});

	it('should fail if the file can not be read', function(done)	{
		xmpReader.fromFile(fixture + '__doesntexist').then(
			(data) => done('Data returned'),
			(err) => done()
		);
	});
});
