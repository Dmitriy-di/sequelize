const router = require('express-promise-router')()

const { Distributor } = require('../controllers/index')

router.route('/:id').get(Distributor.get)
router.route('/').get(Distributor.getAll)
router.route('/').post(Distributor.create)
router.route('/:id').put(Distributor.update)
router.route('/:id').delete(Distributor.delete)

module.exports = router
