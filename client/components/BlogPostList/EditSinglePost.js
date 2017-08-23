import ShowPostItem from './ShowPostItem'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { addPost, removePost, editPost } from '../../actions'
import { Component } from 'react'

const EditSinglePost = ({match, posts, onRemove, onEdit}) => {

        //define function for finding post with match.params._id
        const findBy_id = _id => post => post._id === _id
        const findPostWith_id = findBy_id(match.params._id)
        const POST_ID = match.params._id;

        var post = posts.find(findPostWith_id)

        //if post not found in list, redirect to home page
        if (post === undefined) {
            return ( <Redirect to='/' /> )
        }

        var date = (new Date(post.date)).toLocaleDateString()

        let new_title = ''
        let new_review = ''

        return (
        <div className="post-item">
            <input autoFocus placeholder="Edit Post title..."
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            onEdit(POST_ID, new_title.value, new_review.value)
                        }
                    }}
                    defaultValue={post.title}
                    ref={input=>new_title=input}
                    className="edit-post-title">
            </input>
            <textarea placeholder="Edit Post review..."
                    defaultValue={post.review}
                    ref={input=>new_review=input}
                    className="edit-post-review">
            </textarea>

            <div onClick={()=>onRemove(POST_ID)} className="post-rm-btn">
                (Delete Post)
            </div>
            <div onClick={()=>onEdit(POST_ID, new_title.value, new_review.value)} className="post-edit-btn">
                (Save Changes)
            </div>
            <div className="post-btn"><a className="post-btn" href={'/posts/' + post._id}>
                (View Post)
            </a></div>
        </div>)
}

export const EditSinglePostContainer = connect(
    state => ({
        posts: state.posts
    }),
    dispatch => ({
        onRemove(_id) {
            dispatch(removePost(_id))
        },
        onEdit(_id, title, review) {
            dispatch(editPost(_id, title, review))
        }
    })
)(EditSinglePost)
