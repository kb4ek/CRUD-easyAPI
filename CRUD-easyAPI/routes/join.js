const router = require('express').Router()
const User = require('../databases/User')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

router.post('/join', async (req, res) => {
    try {
        if ((await User.findOne({
                id: req.body.id
            }))) {
            return res.status(412).json({
                message: "중복된 아이디입니다."
            })
        }
        const data = {
            id: req.body.id,
            pw: req.body.password,
            name: req.body.name,
            age: req.body.age
        }
        const user = await User.create(data)
        console.log(1234)
        return res.status(200).json({
            "result": {
                "success": true,
                "message": "회원가입에 성공했습니다."
            }
        })
    } catch (err) {
        const {
            message
        } = err
        console.log(567)
        res.status(500).json({
            "result": {
                "success": false,
                message
            }
        })
    }
})

module.exports = router