const express = require('express')
const db = require('../db')
const router = express.Router()

router.use(express.json())

module.exports = router

router.get('/', (req, res) => {
  console.log('HI')

  db.getLogs()
    .then(logs => {
      console.log(logs)
      // const arrayed = logs.map(log => {
      //   const newLog = {...log}
      //   // convert the saved JSON string into a JavaScript array
      //   newLog.paragraphs = JSON.parse(log.paragraphs)
      //   return newPost
      // })
      res.json(logs)
    })
})

router.post('/create/normal', (req, res) => {
  const log = req.body
  console.log(log)
  db.addLog(log)
    .then(() => {
      res.sendStatus(201).redirect('/')
    })
    .catch(err => res.status(400).json({error: err.message}))
})

router.get('/create', (req, res) => {
  db.getCategory()
    .then(category => {
      // const arrayed = posts.map(post => {
      //   const newPost = {...post}
      //   // convert the saved JSON string into a JavaScript array
      //   newPost.paragraphs = JSON.parse(post.paragraphs)
      //   return newPost
      // })
      // res.json(arrayed)
    })
})
