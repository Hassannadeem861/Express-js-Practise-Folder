
import express from 'express'
const router = express.Router()

//GET   /api/v1/feed/:userId
router.get('/feed/:userId', (req, res) => {
    console.log('/api/v1/comments/:postId', new Date())
    res.send('Post Created')
})

export default router