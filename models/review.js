var bookshelf = require('./../bookshelf');
var Restaurant = require('./restaurant');
var Location = require('./location');

var Review = bookshelf.Model.extend({
	tableName: 'reviews',
	restaurant: function (){
		return this.belongsTo(Restaurant);
	},
	location: function(){
		return this.belongsTo(Location);
	}
});

module.exports = Review;