const express = require('express')
const db = require('../db')
const router = express.Router()

router.use(express.json())

module.exports = router

router.ger('/', (req, res) => {
  db.getJournals()
    .then(journals => {
      const arrayed = posts.map(post => {
        const newPost = {...post}
        // convert the saved JSON string into a JavaScript array
        newPost.paragraphs = JSON.parse(post.paragraphs)
        return newPost
      })
      res.json(arrayed)
    })
})
