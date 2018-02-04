import express from 'express';
//import fs from 'fs';
//import path from 'path';
import open from 'open';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';



/* eslint-disable no-console*/

const port = 3006;
const url = 'http://localhost:';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



app.get('/', function (req, res) {
	res.render('index');
});



app.get('/users', function (req, res) {
	// Hard coding for simplicity. Pretend this hits a real database
	res.json([
		{ "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
		{ "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
		{ "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
	]);
});

app.listen(port, function (err) {
	if (err) { console.log(err); }
	else {
		open(url + port);
	}
})
