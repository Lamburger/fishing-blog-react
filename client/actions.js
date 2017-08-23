import C from './constants.js'
import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'


export const addPostPreFetch = (title, review, url, cords) => ({
        type: C.ADD_POST,
        title: title,
        review: review,
        url: url,
        cords: cords
    })

export const addPost = (title, review, url, cords) => {
    return dispatch => {

        //Perform expected result of the POST API request
        dispatch(addPostPreFetch(title, review, url, cords))

        //API call to POST a new post with {title}
        return fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title: title, review: review, url: url, cords: cords}),
            headers: { "Content-Type": "application/json" },
            credentials: 'same-origin'
        })
        .then(
            response => response,
            error => console.log('An error occured.', error)
        ).then(
            response => dispatch(fetchPosts())
        )
    }
}

export const removePostPreFetch = (_id) => ({
        type: C.REMOVE_POST,
        _id: _id
    })

export const removePost = (_id) => {
    return dispatch => {

        //Perform expected result of the DELETE API request
        dispatch(removePostPreFetch(_id))
        //API call to delete post {_id}
        return fetch('/api/posts/' + _id, {
            method: 'DELETE',
            credentials: 'same-origin'
        })
        .then(
            response => dispatch(fetchPosts()),
            error => console.log('An error occured.', error)
        )
    }
}

export const editPostPreFetch = (_id, title, review, url, cords) => ({
        type: C.EDIT_POST,
        _id: _id,
        title: title,
        review: review,
        url: url,
        cords: cords
    })

export const editPost = (_id, title, review, url, cords) => {
    return dispatch => {
        //Perform expected result of the PUT API request
        dispatch(editPostPreFetch(_id, title, review, url, cords))

        //API call to edit post {_id}, with new title: {title}
        return fetch('/api/posts/' + _id, {
            method: 'PUT',
            body: JSON.stringify({ title: title, _id: _id, review: review, url: url, cords:cords}),
            headers: { "Content-Type": "application/json" },
            credentials: 'same-origin'
        })
        .then(
            response => dispatch(fetchPosts()),
            error => console.log('An error occured.', error)
        )
    }
}

//A thunk which will fetch+set the state of the psot list from the backend db
export const fetchPosts = () => {
    return dispatch => {
        return fetch('/api/posts')
        .then(
            response => response.json(),
            error => console.log('An error occured.', error)
        )
        .then(
            json => dispatch(setPosts(json))
        )
    }
}

export const setPosts = (posts) => ({
    type: C.SET_POSTS,
    posts: posts
})

export const setLogin = (username) => ({
    type: C.LOGIN,
    username: username
})

export const setLogout = () => ({
    type: C.LOGOUT
})

//A thunk which will attempt to register a new user
//If successful, client is logged in
export const registerUser = (values) => {
    return dispatch => {
        return fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ username: values.username, password: values.password1}),
            headers: { "Content-Type": "application/json" },
            credentials: 'same-origin'
        })
        .then(
            response => response.json(),
            error => console.log('An error occured.', error)
        )
        .then(
            json => dispatch(setLogin(json.username))
        )
    }
}

export const logout = () => {
    return dispatch => {
        return fetch('/api/logout', {
            credentials: 'same-origin'
        })
        .then(
            response => dispatch(setLogout()),
            error => console.log('An error occured', error)
        )
    }
}

export const login = (username, password) => {
    return dispatch => {
        return fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password}),
            headers: { "Content-Type": "application/json" },
            credentials: 'same-origin'
        })
        .then(
            response => {
                return response.json()
            },
            error => console.log('An error occured.', error)
        )
        .then(
            json => {
                dispatch(setLogin(json.username))
            }
        )
    }
}

export const checkAuth = (status, username) => ({
    type: C.LOG_CHECK,
    username: status
})

export const isLoggedIn = () => {
    return dispatch => {
        return fetch('/api/login', {
            credentials: 'same-origin'
        })
        .then(
            response => response.json(),
            error => console.log('An error occured.', error)
        )
        .then(
            json => dispatch(checkAuth(json.status, json.username))
        )
    }
}
