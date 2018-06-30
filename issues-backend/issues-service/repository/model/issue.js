var Sequelize = require('sequelize');

module.exports = {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  user_id: Sequelize.INTEGER,
};
