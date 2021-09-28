const Router = require('express')
const router = new Router()
const BrandController = require('../controllers/brandControllers')


router.post('/', BrandController.create)
router.get('/', BrandController.geteAll)
router.delete('/:id', BrandController.delete)

module.exports = router