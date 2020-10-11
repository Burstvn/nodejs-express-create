const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class CpanelController {
  // [GET] /cpanel/homeCpanel.hbs -R
  index(req, res, next) {
    res.render('cpanel/homeCpanel')
  }

  // [GET] /cpanel/addProduct.hbs -R
  add(req, res, next) {
    res.render('cpanel/addProduct')
  }

  //[POST] cpanel/query -C
  query(req, res, next) {
    const docs = req.body
    const course = new Course(docs)
    course.save()
    res.redirect('../Courses')
  }
  //[GET] cpanel/list
  list(req, res, next) {
    Course.find({})
      .then((docs) =>
        res.render('cpanel/list', { docs: mutipleMongooseToObject(docs) })
      )
      .catch(next)
  }

  //[GET] cpanel/update -R
  dataUpdate(req, res, next) {
    Course.findOne({ _id: req.query.id })
      .then((docs) =>
        res.render('./cpanel/updateProduct', { docs: mongooseToObject(docs) })
      )
      .catch(next)
  }

  //[GET] cpanel/update -R
  edit(req, res, next) {
    const docs = req.body
    Course.updateOne({ _id: docs.id }, docs)
      .then(() => res.redirect('Courses'))
      .catch(next)
  }
}

module.exports = new CpanelController()
