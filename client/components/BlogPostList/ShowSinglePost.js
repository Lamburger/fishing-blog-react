import ShowPostItem from './ShowPostItem'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { addPost, removePost, editPost } from '../../actions'
import { Component } from 'react'

const ShowSinglePost = ({match, posts, onRemove}) => {

        //define function for finding post with match.params._id
        const findBy_id = _id => post => post._id === _id
        const findPostWith_id = findBy_id(match.params._id)

        var post = posts.find(findPostWith_id)

        //if post not found in list, redirect to home page
        if (post === undefined) {
            return ( <Redirect to='/' /> )
        }


        return <ShowPostItem
            _id={post._id}
            title={post.title}
            url={post.url}
            cords={post.cords}
            review={post.review}
            onRemove={()=>onRemove(post._id)}
            onEdit={()=>this.setEditingItem(post._id)}>
        </ShowPostItem>
}

export const ShowSinglePostContainer = connect(
    state => ({
        posts: state.posts
    }),
    dispatch => ({
        onRemove(_id) {
            dispatch(removePost(_id))
        },
        onEdit(_id, title, review, url, cords) {
            dispatch(editPost(_id, title, review, url, cords))
        }
    })
)(ShowSinglePost)
