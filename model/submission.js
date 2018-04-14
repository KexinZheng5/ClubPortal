var mongoose = require('mongoose');

var SubmissionSchema = new mongoose.Schema({
  fname: {type: String},
  lname: {type: String},
  age: {type: Number},
  comments: {type: String},
},{timestamps: true});

module.exports = mongoose.model ('Submission',SubmissionSchema, 'Submission');
