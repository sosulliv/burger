import express from 'express';
//import  main from '../models/main.js';
import burger_model from '../models/ormsync.js';


let router = express.Router();
burger_model.sync();

router.get('/', function (req, res) {
	//get_burgers();
	res.redirect('/index');
});


router.get("/index", function (req, res) {
	// replace old function with sequelize function
	burger_model.findAll({
		limit: 100,
		// Here we specify we want to return our burgers in ordered by ascending burger_name
		order: [
			["burger_name"]
		]
	})
		// use promise method to pass the burgers...
		.then(dbBurger => {

			console.log(dbBurger);
			// into the main index, updating the page
			var hbsObject = {
				burger: dbBurger
			};
			return res.render("index", hbsObject);
		});
});


 //Create a New Burger
router.post('/burger/create', function (req, res) {
	burger_model.create({
		burger_name: req.body.burger_name,
		devoured: false
	}
	)
		.then(burgers => {

			console.log(burgers);
			res.redirect('/index');
			//console.log(burgers.get('burger_name')); // John Doe (SENIOR ENGINEER)
			//console.log(burgers.get('devoured')); // SENIOR ENGINEER
		})
	});



router.post('/burger/eat/:id', function (req, res) {
	burger_model.update({
		//burger_name: 'McRoyal',
		devoured: true
	},
		{ where: { id: req.params.id } }
	)
		.then(burgers => {

			console.log(burgers);
			res.redirect('/index');
			//console.log(burgers.get('burger_name')); // John Doe (SENIOR ENGINEER)
			//console.log(burgers.get('devoured')); // SENIOR ENGINEER
		})

	//main.update_burger(req.params.id, function ()
	});


export default router;
