var Repository = require('../../repository/repository');
var repo = new Repository();
var Issue = repo.models.Issue;
var User = repo.models.User;

function getAllIssues(req, res) {
  const limit = req.param("items") || 10
  Issue.findAll({
    limit: limit, 
    order: [['updatedAt', 'DESC']]
  }).then(issues => {
	   res.send(issues);
	});
}

function getIssue(req, res) {
  Issue.findById(req.swagger.params.id.value)
    .then(function(issue) {
      res.status(200).json(issue);
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message,
      });
    })
}

function search(req, res) {
  Issue.findAll({
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
    .then(function(Issues) {
      res.status(200).json(Issues);
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message,
      });
    })
}

module.exports = {
  getAllIssues: getAllIssues,
  getIssue: getIssue,
  search: search
};
