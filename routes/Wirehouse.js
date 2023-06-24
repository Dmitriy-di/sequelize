const router = require('express-promise-router')()

const { Wirehouse } = require('../controllers/index')

router.route('/:id').get(Wirehouse.get)
router.route('/').get(Wirehouse.getAll)
router.route('/').post(Wirehouse.create)
router.route('/:id').put(Wirehouse.update)
router.route('/:id').delete(Wirehouse.delete)

module.exports = router
