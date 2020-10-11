const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/burstvn_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    console.log('connect data successfully!!!')
  } catch (error) {
    console.log('connect data failure!!!')
  }
}

module.exports = { connect }
