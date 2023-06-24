const router = require('express-promise-router')()

const { Staff } = require('../controllers/index')

router.route('/:id').get(Staff.get)
router.route('/').get(Staff.getAll)
router.route('/').post(Staff.create)
router.route('/:id').put(Staff.update)
router.route('/:id').delete(Staff.delete)

module.exports = router
