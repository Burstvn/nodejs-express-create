const express = require('express')
const router = express.Router()
const cpanelController = require('../app/controllers/CpanelController')

// [GET] /cpanel/add -R
router.get('/add', cpanelController.add)

// [POST] /cpanel/query -C
router.post('/query', cpanelController.query)

// [GET] /cpanel/list -R
router.get('/list', cpanelController.list)

// [GET] /cpanel/update -R
router.get('/update', cpanelController.dataUpdate)

// [PUT] /cpanel/edit -U
router.put('/edit', cpanelController.edit)

// [GET] /cpanel -R
router.get('/', cpanelController.index)

module.exports = router
