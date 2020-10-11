const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')
class CourseController {
  index(req, res, next) {
    Course.find({})
      .then((docs) => {
        res.render('Courses', { docs: mutipleMongooseToObject(docs) })
      })
      .catch(next)
  }

  show(req, res, next) {
    const docs = req.params.slug
    Course.findOne({ slug: docs }).then((docs) =>
      res.render('showCourse', { docs: mongooseToObject(docs) }).catch(next)
    )
  }
}

module.exports = new CourseController()
