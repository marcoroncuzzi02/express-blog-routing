const express = require('express')
const app = express()
const port = 3000
const postRouter = require('./routers/posts');

app.use(express.static('./public/imgs'));

app.get('/', (req, res) => {
res.send('QUESTO è IL SERVER DEL BLOG')
})

app.use("/posts", postRouter)

// // index
// router.get('/', function(req, res) {
//     res.send('Lista dei post');
//     });

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

