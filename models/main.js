import burger_model from './ormsync.js'
/*eslint-disable-line no-console*/
burger_model.sync();

function query_burger(devoured) {

	burger_model.all({
		limit: 100,
		where: { devoured: devoured }
	})
		.then(burgers => {

			console.log(burgers[1].dataValues);
		})
}

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



export default { query_burger, create_burger, update_burger };
