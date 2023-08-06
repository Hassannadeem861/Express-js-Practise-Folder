
import express from 'express'
const router = express.Router()


//GET /api/v1/post/:userId/:postId = Single post
router.get('/post/:userId/:postId', (req, res) => {
    console.log('This is signup', new Date())
    res.send('Post Created')
})

//GET /api/v1/posts/:userId = Multipal Post
router.get('/post/:userId/:postId', (req, res) => {
    console.log('This is signup', new Date())
    res.send('Post Created')
})

//POST /api/v1/post
router.post('/post', (req, res) => {
    console.log('This is signup', new Date())
    res.send('Post Created')
})

//PUT  /api/v1/post/:userId/:postId
router.put('/post/:userId/:postId', (req, res) => {
    console.log('This is signup', new Date())
    res.send('Post Created')
})

//DELETE  /api/v1/post/:userId/:postId
router.delete('/post/:userId/:postId', (req, res) => {
    console.log('This is signup', new Date())
    res.send('Post Created')
})

export default router