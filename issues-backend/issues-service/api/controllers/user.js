var Repository = require('../../repository/repository');
var repo = new Repository();
var User = repo.models.User;
var Issue = repo.models.Issue;

function getAllUsers(req, res) {
  User.findAll({})
    .then(function(users) {
      res.status(200).json(users);
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message,
      });
    })
}

function getUserIssues(req, res) {
  User.findAll({
    where: {
      id: req.swagger.params.id.value,
    },
    include: [
      {
        model: Issue
      }]
    })
    .then(function(users) {
      res.status(200).json(users);
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message,
      });
    })
}

function getUser(req, res) {
  User.findAll({
    where: {
      id: req.swagger.params.id.value,
    }
  })
    .then(function(users) {
      res.status(200).json(users);
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message,
      });
    })
}

function search(req, res) {
  User.findAll({
    where: {
      $or: {
        first: {
              $like: '%'+req.swagger.params.text.value+'%',
        },
        last: {
              $like: '%'+req.swagger.params.text.value+'%',
        },
        email: {
              $like: '%'+req.swagger.params.text.value+'%',
        },
        phone: {
              $like: '%'+req.swagger.params.text.value+'%',
        },
        cell: {
              $like: '%'+req.swagger.params.text.value+'%',
        }
      }
    }
  })
    .then(function(users) {
      res.status(200).json(users);
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message,
      });
    })
}

module.exports = {
  getAllUsers: getAllUsers,
  getUserIssues: getUserIssues,
  getUser: getUser,
  search: search
};
