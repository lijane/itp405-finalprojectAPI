require ('dotenv').config();

var express = require('express');
var app = express();
var Review = require('./models/review');
var Restaurant = require('./models/restaurant');
var Location = require('./models/location');
var bodyParser = require('body-parser');
var cors = require ('cors');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//Endpoint 1 - Return a list of all reviews
app.get('/api/reviews',function(request, response){
	Review.fetchAll().then(function(reviews){
	response.json(reviews);
	});
});

//Endpoint 2 - Return single review with restaurant & location
app.get('/api/reviews/:id', function(request,response){
	Review
		.where('id', request.params.id)
		.fetch({ require: true, withRelated:['restaurant','location'] }) // require: true rejects promise if song isnt found
		.then(function(review) {
			response.json(review);
		}, function(){
			response.json({
				error: 'Review cannot be found'
			});
		});
});

//Endpoint 3 - Post create new review in database
app.post('/api/reviews', function(request, response){
	var review = new Review({
		restaurant_id: request.body.restaurant_id,
		location_id: request.body.location_id,
		title: request.body.title,
		body: request.body.body
	});

	review.save().then(function(){
		response.json(review);
	});
});

app.listen(8000);