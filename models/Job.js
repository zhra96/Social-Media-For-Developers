const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
    },
    name:{
      type: String,
      //ref: 'user'
    },
    title: {
      type: String,
      required: true
    },
    skillsRequired: {
      type: String
    },
    jobDescription:{
      type: String
    },
    experienceInYears:{ 
      type: Number,
      required: true
    },
    salary:{
      type : Number,
      required: true
    },
    date: {
        type: Date,
        default: Date.now
      }
    });

    module.exports = mongoose.model('job', JobSchema);