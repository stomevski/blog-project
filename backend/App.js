const express = require('express');
const Mongo = require('./db/schema');
const cors = require('cors');
const { json } = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(4000,'localhost', () => {
    console.log('Server started at port 4000');
});

// Home page, get all blogs
app.get('/', (req,res) => {

    Mongo.find().then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
})

//add new blog
app.post('/add',(req, res) => {

const newBlog = new Mongo({

    title : req.body.title,
    snippet : req.body.snippet,
    text : req.body.text
});

newBlog.save().then((result) => {
    res.send(result);
})
.catch((err) => {
    res.send(err);
})
})


//get single blog

app.get('/blog/:id', (req,res) =>{

Mongo.findById(req.params.id)
.then((result) => {
    res.send(result);
})
.catch((err) => {
    res.send(err);
})

})

//delete blog

app.delete('/remove/:del', (req, res) => {

Mongo.findByIdAndDelete(req.params.del)
.then((result) => {
    res.send(req.params.del);
})
.catch((err) => {
    res.send(err);
})

})
