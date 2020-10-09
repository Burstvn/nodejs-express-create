const express = require('express')
const router = express.Router()
const newsController = require('../app/controllers/NewsController')

//[GET] /seach/:id
router.get('/:id', newsController.index)
//[GET] /seach
router.get('/', newsController.index)

module.exports = router