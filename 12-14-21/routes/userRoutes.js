const router = require('express').Router()
const db = require('../db')

router.get('/todolist', (req, res) => {
  db.query('SELECT * FROM todolist', (err, items) => {
    if (err) { console.log(err) }
    res.json(items)
  })
})

router.post('/todolist', (req, res) => {
  db.query('INSERT INTO todolist SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200).json({"good":true});
  })
})

module.exports = router