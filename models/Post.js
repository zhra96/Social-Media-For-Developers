const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  avatar: {
    type: String
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
 
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('post', PostSchema);
