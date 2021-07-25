const { Member } = require('../models/index');
class MemberController {
    static listMember(req, res) {
        Member
            .findAll()
            .then(data => {
                res.render('member/index', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static formMember(req, res) {
        res.render('member/formAdd')
    }
    static addMember(req, res) {
        const data = {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            member: req.body.member
        }
        Member
            .create(data)
            .then(() => {
                res.redirect('/members')
            })
            .catch(err => {
                console.log(err)
            })
    }
    static editMember(req, res) {
        const id = req.params.id
        Member
            .findByPk(+id)
            .then(data => {
                res.render('member/formEdit', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static updateMember(req, res) {
        const data = {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            member: req.body.member
        }
        const id = req.params.id
        Member
            .update(data, {
                where: {
                    id: +id
                }
            })
            .then(() => {
                res.redirect('/members')
            })
            .catch(err => {
                console.log(err)
            })
    }
    static deleteMember(req, res) {
        const id = Number(req.params.id)
        Member
            .destroy({
                where: {
                    id
                }
            })
            .then(() => {
                res.redirect('/members')
            })
            .catch(err => {
                res.send(err)
            })
    }
}
module.exports = MemberController