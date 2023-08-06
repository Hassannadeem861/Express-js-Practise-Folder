
import express from 'express'
const router = express.Router()


//GET  /api/v1/comment/:postId/:commentId = single comment
router.get('/comment/:postId/:commentId', (req, res) => {
    console.log('This is signup', new Date())
    res.send('Post Created')
})

//GET /api/v1/comments/:postId = Multipal comments
router.get('/comments/:postId', (req, res) => {
    console.log('This is signup', new Date())
    res.send('Post Created')
})

//PUT  /api/v1/comment/:postId/:commentId = single comment
router.put('/comment/:postId/:commentId', (req, res) => {
    console.log('/api/v1/comments/:postId', new Date())
    res.send('Post Created')
})

//DELETE  /api/v1/comment/:postId/:commentId
router.delete('/comment/:postId/:commentId', (req, res) => {
    console.log('/api/v1/comments/:postId', new Date())
    res.send('Post Created')
})

export default router