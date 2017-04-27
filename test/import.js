var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var expect = chai.expect;

var CrEx = require('../lib/crex');

describe('Import', function() {
	var crex = new CrEx({
		user: 'admin',
		password: 'admin',
		url: 'localhost',
		port: 4502
	});

	describe('#getAllPackages', function() {
		it('should return list of packages', function() {
			return expect(crex.importGetAllPackages()).to.eventually.be.a('array');
		});
	});
});