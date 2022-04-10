const db = require("../db/db");

const Pothole = {
    getPotholes: () => {
        const sql = `SELECT * FROM potholes`
        return db.query(sql).then(dbRes => dbRes.rows)
    },

    createPothole: (lat, lng, location, size, photo, currentUserName, date) => {
        const sql = `INSERT INTO potholes (lat, lng, location, size, photo, username, date) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *`

        return db.query(sql, [lat, lng, location, size, photo, currentUserName, date]).then((dbRes) => dbRes.rows[0])
    }
}

module.exports = Pothole