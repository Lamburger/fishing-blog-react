import AddPostForm from './AddPostForm'
import ShowPostList from './ShowPostList'
import { connect } from 'react-redux'
import { addPost, removePost, editPost } from '../../actions'

export const AddPostContainer = connect(
    null,
    dispatch => ({
        onAdd(title, review, url, cords) {
            dispatch(addPost(title, review, url, cords))
        }
    })
)(AddPostForm)

export const PostListContainer = connect(
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
)(ShowPostList)
