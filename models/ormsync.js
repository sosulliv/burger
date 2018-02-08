import secret_sauce from  '../config/secret_sauce.json';
import Sequelize from 'sequelize';
const sequelize = new Sequelize('mysql://root:'+secret_sauce.crazy+'@localhost:3306/burgers_db');


const burger_model= sequelize.define('burgers', {
	burger_name: Sequelize.STRING,
	devoured: Sequelize.BOOLEAN//,
	//date: Sequelize.DATE

});

//burger.sync();


export default burger_model;
