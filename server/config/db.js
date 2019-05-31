const mongoose = require('mongoose');
const config = require('config');

const db = config.get("mongoURI")

// const connectDB = () => {
//   mongoose.connect(db, { useNewUrlParser: true })
//     .then(connect => console.log("mongo connected?"))
//     .catch(err => console.log(err))
// }


const connectDB = async () => {
  try {
   await mongoose.connect(db, { useNewUrlParser: true })
   console.log("DB connected")
  }
  catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}
module.exports = connectDB
