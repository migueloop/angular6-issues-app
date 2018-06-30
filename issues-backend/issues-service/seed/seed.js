var usersJson = require('./persons.json');
var issuesJson = require('./issues.json');
var Repository = require('../repository/repository');

var repo = new Repository();

var User = repo.models.User;
var Issue = repo.models.Issue;
var UserIssue = repo.models.UserIssue;



  Issue.sync({ force: true })
  .then(function (){
    return Promise.all(
      issuesJson.map(function(issue, index) {
        Issue.create({
          title: issue.title,
          description: issue.description
        })
      })
    );
  });



  User.sync({ force: true })
  .then(function (){
    return Promise.all(
      usersJson.map(function(user) {
        User.create({
          gender: user.gender,
          title: user.name.title,
          first: user.name.first,
          last: user.name.last,
          email: user.email,
          username: user.login.username,
          phone: user.phone,
          cell: user.cell,
          picture: user.picture.large,
          registered: new Date(user.registered).getTime(),
          dob: new Date(user.dob).getTime()
        }).then(function (user) {
          // Step Two: Create Issue
          return Issue.create({
            title: issuesJson[user.id].title,
            description: issuesJson[user.id].description
          }).then(function (issue) {
            return user.addIssues([issue])
          });
        }).then(function () {
          console.log('Everything worked, check the database.');
        }).catch(function (err) {
          console.log('Something went wrong. Catch was executed.', err);
        });
      })
    );
  });