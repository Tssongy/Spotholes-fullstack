const express = require("express");
const User = require('../models/user')
const bcrypt = require('bcrypt')

const router = express.Router();

// router.get('/', (req, res) => {
//     // res.json({ potholeData })
//     User.getPotholes().then(potholeData => res.json(potholeData))
// })

router.post('/', (req, res) => {
    const {name, email, password} = req.body
    const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    User
        .create(name, email, passwordDigest)
        .then(userName => res.json(userName))
})

module.exports = router