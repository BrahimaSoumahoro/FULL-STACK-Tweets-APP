const express = require('express');

const tweetsRouter = express.Router();



tweetsRouter.get('/', (req, res) => {
    res.json({data: [{
        title: "Deep Thoughts",
        body: "Friends, I am the realest coder alive",
        author: "Arthur",
      }] })
});

//* POST, to receive more post here
tweetsRouter.post('/', (req, res) => {

})


module.exports = tweetsRouter;