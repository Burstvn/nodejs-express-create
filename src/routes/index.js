const newsRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./Courses.route.js')
const cpanelRouter = require('./cpanel')
function route(app) {
  //[GET] /cpanel
  app.use('/cpanel', cpanelRouter)

  // [GET] Courses
  app.use('/Courses', courseRouter)

  //[GET] /news
  app.use('/news', newsRouter)

  //[GET] /home + /search
  app.use('/', siteRouter)
}

module.exports = route
