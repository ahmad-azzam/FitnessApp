const router = require('express').Router();
const MemberController = require('../controllers/member');

router.get('/', MemberController.listMember)
router.get('/add', MemberController.formMember)
router.post('/add', MemberController.addMember)
router.get('/:id/edit', MemberController.editMember)
router.post('/:id/edit', MemberController.updateMember)
router.get('/:id/delete', MemberController.deleteMember)

module.exports = router