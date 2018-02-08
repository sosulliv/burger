import express from 'express';
import main from '../models/main.js';



let router = express.Router();


router.get('/', function (req, res) {
	res.render('index');
});


// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {
	main.query_burger(function (data) {
		console.log(data);
		var hbsObject = { burgers: data };
		//console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// Create a New Burger
router.post('/burger/create', function (req, res) {
	main.create_burger(req.body.burger_name, function () {
		res.redirect('/index');
	});
});


export default router;
