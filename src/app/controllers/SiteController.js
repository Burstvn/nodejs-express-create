class SiteController {
  //[get] /seach
  search(req, res) {
    res.render('search')
  }
  //[GET] /home
  home(req, res) {
    res.render('home')
  }
}

module.exports = new SiteController()
