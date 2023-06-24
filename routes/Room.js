const router = require('express-promise-router')()

const { Room } = require('../controllers/index')

router.route('/:id').get(Room.get)
router.route('/').get(Room.getAll)
router.route('/').post(Room.create)
router.route('/:id').put(Room.update)
router.route('/:id').delete(Room.delete)

module.exports = router
