const { render } = require("node-sass");

class SiteController{

    //[get] /seach
    seach(req,res){
        res.render('seach')
        console.log(req.query)
    }
    //[GET] /home
    home(req,res){
        res.render('home')
    }
}

module.exports = new SiteController