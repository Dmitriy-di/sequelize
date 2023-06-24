const router = require('express-promise-router')()

const { ChatHistory } = require('../controllers/index')

router.route('/:id').get(ChatHistory.get)
router.route('/').get(ChatHistory.getAll)
router.route('/').post(ChatHistory.create)
router.route('/:id').put(ChatHistory.update)
router.route('/:id').delete(ChatHistory.delete)

module.exports = router
