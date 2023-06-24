const router = require('express-promise-router')()

const { WirehouseOwner } = require('../controllers/index')

router.route('/:id').get(WirehouseOwner.get)
router.route('/').get(WirehouseOwner.getAll)
router.route('/').post(WirehouseOwner.create)
router.route('/:id').put(WirehouseOwner.update)
router.route('/:id').delete(WirehouseOwner.delete)

module.exports = router
