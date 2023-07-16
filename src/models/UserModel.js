const mongoose = require('mongoose')
const {v4} = require('uuid')

const UserSchema = new mongoose.Schema({
  name : String,
  email: {
    type: String,
    unique: true
  },
  uid: {
    type: String,
    unique: true, 
    default: v4()
  },
  password: {
    type: String,
    required: true
  },
  credit: {
    type: Number,
    default: 10
  },
  date: String
})

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)
export default UserModel
