const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')

//[GET] /search
router.get('/search', siteController.search)
//[GET] /home
router.get('/', siteController.home)

module.exports = router
