import burger_model from './ormsync.js'
/*eslint-disable-line no-console*/
//import { Promise } from 'es6-promise';
//	import express from 'express';

//let router = express.Router();


burger_model.sync();





//query_burger();



function create_burger(burger_name) {
	burger_model.create({
		burger_name: burger_name,
		devoured: false
	})
		.then(burgers => {
			console.log(burgers.get('burger_name')); // John Doe (SENIOR ENGINEER)
			console.log(burgers.get('devoured')); // SENIOR ENGINEER
		})
}

function update_burger(id) {
	burger_model.update({
		//burger_name: 'McRoyal',
		devoured: true
	},
		{ where: { id: id } }
	)
		.then(burgers => {

			console.log(burgers);
			//console.log(burgers.get('burger_name')); // John Doe (SENIOR ENGINEER)
			//console.log(burgers.get('devoured')); // SENIOR ENGINEER
		})
}



export default {create_burger, update_burger };
