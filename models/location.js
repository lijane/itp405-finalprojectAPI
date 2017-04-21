var bookshelf = require('./../bookshelf');

var Location = bookshelf.Model.extend({
	tableName: 'locations'
});

module.exports = Location;