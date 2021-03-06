const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  polls: [{type: mongoose.Schema.Types.ObjectId, ref: 'polls'}]
})

module.exports = mongoose.model('users', userSchema)
