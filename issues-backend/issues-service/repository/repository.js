var Sequelize = require('sequelize');
var UserModel = require('./model/user');
var IssueModel = require('./model/issue');
var sequelize = require('sequelize');
// var UserIssueModel = require('./model/user_issue');

module.exports = function() {
  var self = {
    models: {},
  };

  self.sequelize = new Sequelize('agenda', 'root', 'root', {
    host: 'docker.for.mac.localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });
  self.models.User = self.sequelize.define('user', UserModel);
  self.models.Issue = self.sequelize.define('issue', IssueModel);


  self.models.UserIssueModel = self.sequelize.define('userIssue', {
    // No attributes required, just the userId and todoId
    // You could add something else here like a favorites boolean field so a user
    // can mark a todo as "favorited".  
  }); 

  self.models.User.belongsToMany(self.models.Issue, { through: self.models.UserIssueModel  });
  self.models.Issue.belongsToMany(self.models.User, { through: self.models.UserIssueModel  });
  self.sequelize.sync();
  return self;
}
