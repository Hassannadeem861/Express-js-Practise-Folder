
import express from 'express'
const router = express.Router()  //export variable


import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comments.mjs'
import postRouter from './routes/posts.mjs'
import feedRouter from './routes/feed.mjs'
// import { a, b } from './routes/auth.mjs'

// /api/v1/login
router.use(authRouter)


// ya ak standard express ka server hain go kuch is tara ka hota hain

router.use((req, res, next) => {
    const token = "valid"
    if (token === "valid") {

        next();

    } else {

        res.send({

            message: "Invalid Token"

        })
    }

})

router.use(commentRouter)
router.use(postRouter)
router.use(feedRouter)


router.post("/weather", (req, res, next) => {

    console.log("req.body:", req.body);

    res.send({
        message: "weather is noraml is",
        apiVersion: "v1",
        temp: 32,
        min: 20
    });
})

// router.post("/api/v2/weather", (req, res, next) => {

//     console.log("req.body:", req.body);

//     res.send({
//         message: "weather is noraml",
//         temp: 32,
//         min: 20
//     });
// })

export default router 
