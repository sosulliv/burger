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



// Open Server
app.listen(port, function (err) {
	if (err) { console.log(err); }
	else {
		open(url + port);
	}
})
