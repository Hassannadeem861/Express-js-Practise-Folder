
import express from 'express'
const router = express.Router()


//Not recommended at - all server should be stateless
//File Store Variable
const posts = [

    {
        id: "98148",
        text: "Abc Post Tittle",
        title: "Some Post Text"
    }
];

//POST /api/v1/post
router.post('/post', (req, res) => {
    console.log('This is signup', new Date())

    if (

        !req.body.id
        || !req.body.text
        || !req.body.title

    ) {

        res.status(403);
        res.send(`Required Parameters Missing 
        Example Request Body:

        {
            id: "98148",
            text: "Abc Post Tittle",
            title: "Some Post Text"

        }`);
      return;
    }

    posts.push({

        id: req.body.id,
        text: req.body.text,
        title: req.body.title,

    })



    res.send('Post Created')
})


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