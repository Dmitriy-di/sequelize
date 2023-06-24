const router = require('express-promise-router')()

const { Posts } = require('../controllers/index')

router.route('/:id').get(Posts.get)
router.route('/').get(Posts.getAll)
router.route('/').post(Posts.create)
router.route('/:id').put(Posts.update)
router.route('/:id').delete(Posts.delete)

module.exports = router
