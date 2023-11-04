const router = require('express').Router()
const InmueblesController = require('../../controllers/inmuebles.controller')

router.get('/', InmueblesController.getInmuebles)

module.exports = router