module.exports = {
  mutipleMongooseToObject(mongoose) {
    return mongoose.map((item) => item.toObject())
  },
  mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose
  },
}
