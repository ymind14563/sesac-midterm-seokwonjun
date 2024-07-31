const Sequelize = require('sequelize'); // sequelize 패키지를 불러옴
const config = require(__dirname + '/../config/config.json')["development"];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config); 

const TodoModel = require(`./Todo`)(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = TodoModel;

module.exports = db;
