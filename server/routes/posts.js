var express = require('express')
var router = express.Router()
const uuid = require('uuid')
const mongoose = require('mongoose'),
      models = require('../db.js')
//Routes for '/api/'

//call for adding a new post (requires authentication)
router.post('/posts', function (req, res) {
    if(req.isAuthenticated()) {
        if (!req.body.title || !req.body.review || req.body.title == "" || req.body.review == "") {
            // res.send({error: 'Both title and content required for post' } )
            res.send({error : 'Invalid title or content'})
            return
        }
        var newPost = new models.posts({
            title: req.body.title,
            review: req.body.review,
            cords: req.body.cords,
            url: req.body.url
        })

        newPost.save(function (err, newPost) {
            if (err) {
                res.send({error: '[!] Error creating post'})
                return console.error(err)
            } else {
                res.send({status: 'Post successful'})
                return
            }
        })
    } else {
        res.send({error: 'Unauthorized.'})
    }
})

//call for getting a list of existing posts
router.get('/posts', function (req, res) {

    models.posts.find({}, {

        },function (err, allPosts) {

        allPosts.sort(function(a,b){
            return new Date(b.date) - new Date(a.date)
        });

        if (err) return console.error(err)
        res.send(allPosts)
    })
})

//call for deleting a post (requires authentication)
router.delete('/posts/:_id', function (req, res) {
    if(req.isAuthenticated()) {
        models.posts.find({_id: req.params._id}).remove(function (err, obj) {
            if (err) return console.error(err)
            else {
                if (obj.result.n === 0) {
                    res.send({error: 'invalid post id'})
                } else {
                    res.send({status: 'post deleted'})
                }
            }
        })
    } else {
        res.send({error: 'unauthorized'})
    }
})

//call for updading a post (requires authentication)
router.put('/posts/:_id', function (req, res) {
    if(req.isAuthenticated()) {
        models.posts.update({_id: req.params._id},    //condition
                    {title: req.body.title,
                     review: req.body.review},//info updated
                    function (err, obj) {
            if (err) return console.error(err)
            else {
                if (obj.n === 0) {
                    res.send({error: 'invalid post id'})
                } else {
                    res.send({status: 'post updated'})
                }
            }
        })
    } else {
        res.send({error: 'unauthorized'})
    }
})

module.exports = router
