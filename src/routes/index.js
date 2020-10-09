const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app) {

    //[GET] /seach
    app.use('/seach', siteRouter)
    //[GET] /news
    app.use('/news', newsRouter)
    //[GET] /home
    app.use('/', siteRouter)

}

module.exports = route
