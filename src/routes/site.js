const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')

//[GET] /search
router.get('/seach', siteController.seach)
//[GET] /home
router.get('/', siteController.home)

module.exports = router