var bookshelf = require('./../bookshelf');

var Restaurant = bookshelf.Model.extend({
	tableName: 'restaurants'
});

module.exports = Restaurant;