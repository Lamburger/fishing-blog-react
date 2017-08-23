import C from '../../constants.js'

export const posts = (state={}, action) => {
    switch (action.type) {
        case C.ADD_POST:
            return [
                ...state,
                {
                    title: action.title,
                    review: action.review,
                    url: action.url,
                    cords: action.cords
                }
            ]
        case C.REMOVE_POST:
            return state.filter(
                c => c._id !== action._id
            )
        case C.EDIT_POST:
            return state.map((post, i) => {
                if (post._id === action._id) {
                    return {
                        _id: post._id,
                        title: action.title,
                        review: action.review
                    }
                }
                return post
            })
        case C.SET_POSTS:
            return [...action.posts]
        default :
            return state
    }
}
