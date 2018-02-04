import express from 'express';
//import fs from 'fs';
//import path from 'path';
import open from 'open';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import router from './controllers/controller.js';




/* eslint-disable no-console*/

const port = 3007;
const url = 'http://localhost:';
const app = express();

//express config
app.use(express.static(process.cwd() + '/public'));

//body parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//handlebars config
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//router
app.use('/', router);


app.get('/users', function (req, res) {
	// Hard coding for simplicity. Pretend this hits a real database
	res.json([
		{ "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
		{ "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
		{ "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
	]);
});


// Open Server
app.listen(port, function (err) {
	if (err) { console.log(err); }
	else {
		open(url + port);
	}
})
