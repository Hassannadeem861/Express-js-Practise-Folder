
//ya hum na node.js ka import export Sekha hain is ka express sa q reaction nahi hain

console.log("Hello World Backend Express Routing");

import express from 'express'
import cors from 'cors'
import path from 'path'
const __dirname = path.resolve()


import apiv1Router from './apiv1/index.mjs'
import apiv2Router from './apiv2/index.mjs'

// import authRouter from './apiv1/routes/auth.mjs'
// import commentRouter from './apiv1/routes/comments.mjs'
// import postRouter from './apiv1/routes/posts.mjs'
// import feedRouter from './apiv1/routes/feed.mjs'
// import { a, b } from './routes/auth.mjs'

const app = express()
app.use(cors())
app.use(express.json())  // body parser


// app.use('/api/v1', authRouter)


// // ya ak standard express ka server hain go kuch is tara ka hota hain
// app.use((req, res, next) => {

//     if (token === "valid") {

//         next();

//     } else {

//         res.send({

//             message: "Invalid Token"

//         })
//     }

// })


// app.use('/api/v1', commentRouter)
// app.use('/api/v1', postRouter)
// app.use('/api/v1', feedRouter)



app.use('/api/v1', apiv1Router)
app.use('/api/v2', apiv2Router)


// app.post("/api/v1/weather", (req, res, next) => {

//     console.log("req.body:", req.body);

//     res.send({
//         message: "weather is noraml",
//         temp: 32,
//         min: 20
//     });
// })

// app.post("/api/v2/weather", (req, res, next) => {

//     console.log("req.body:", req.body);

//     res.send({
//         message: "weather is noraml",
//         temp: 32,
//         min: 20
//     });
// })


//  /static/vscode/_window.exe
app.use("static", express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})