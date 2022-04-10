const express = require("express");
const Pothole = require('../models/pothole')

const router = express.Router();

router.get('/', (req, res) => {
    // res.json({ potholeData })
    Pothole.getPotholes().then(potholeData => res.json(potholeData))
})

router.post('/', (req, res) => {
    const { lat, lng, location, size, photo, currentUserName, date } = req.body
    Pothole.createPothole(lat, lng, location, size, photo, currentUserName, date).then((potholeData) => res.json(potholeData))
})

module.exports = router