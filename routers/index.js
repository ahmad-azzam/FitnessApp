const router = require('express').Router();
const memberRouter = require('./memberRoute');

router.get('/', (req, res) => {
    res.render('main-page/index.ejs')
})
router.use('/members', memberRouter)

module.exports = router