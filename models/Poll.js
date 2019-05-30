const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
  options: String,
  votes: {
    type: Number,
    default: 0
  }
})

const pollSchema = new mongoose.Schema({
  user: {
    type:
  }
  question: {
    type: String
  },
  options:[{}],
  voted: [{type: mongoose.Schema.Types.ObjectId, ref: 'users'}]
})

module.exports = mongoose.model('polls', pollSchema)
