const db = require("../models");
const mongoose = require('mongoose');
mongoose.Promise = Promise;

module.exports = {
  findAll: function(req, res) {
    console.log('FIND ALL CONTROLLER!!!!!!!');
    db.Issue
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Issue
      .findById(req.params.id)
      .then(dbModel => {
        res.json(dbModel)
      // console.log("dbModel", dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Issue
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("req",req.body.id)
    db.Issue
      .findByIdAndUpdate({_id: req.params.id }, req.body, { new: true })
      .then(dbModel => {
        res.json(dbModel)
        console.log("dbModel", dbModel)
      }) 
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Issue
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
