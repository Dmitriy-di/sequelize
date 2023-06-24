const router = require('express-promise-router')()

const { Contract } = require('../controllers/index')

router.route('/:id').get(Contract.get)
router.route('/').get(Contract.getAll)
router.route('/').post(Contract.create)
router.route('/:id').put(Contract.update)
router.route('/:id').delete(Contract.delete)

module.exports = router
