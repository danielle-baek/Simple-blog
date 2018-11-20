const express = require('express')
const db = require('../db')
const router = express.Router()

router.use(express.json())

module.exports = router

router.get('/', (req, res) => {
  db.getLogs()
    .then(logs => {
      console.log(logs)
      res.json(logs)
    })
})

router.post('/create/', (req, res) => {
  const log = req.body
  // console.log('router')
  // console.log(log)
  db.addLog(log)
    .then(() => {
      res.status(201).redirect('/')
    })
    .catch(err => res.status(400).json({error: err.message}))
})

router.get('/create', (req, res) => {
  db.getCategories()
    .then(categories => {
      // console.log(categories)
      res.json(categories)
    })
})
