import { PropTypes, Component } from 'react'
import ShowPostItem from './ShowPostItem'
import EditPostItem from './EditPostItem'

import Minimap from '../Maps/showmap.js';

class ShowPostList extends Component {

    constructor(props) {
        super(props)
        this.state = {editing: ""}
        this.setEditingItem=this.setEditingItem.bind(this)
        this.editItem=this.editItem.bind(this)
    }

    //set the _id of the item currently being edited
    setEditingItem(_id) {
        this.setState({editing: _id})
    }

    //dispatch an item edit
    //set the editing item to no _id
    editItem(new_title, new_content, _id) {
        this.props.onEdit(_id, new_title, new_content)
        this.setEditingItem("")
    }

    render() {
        const { store } = this.context
        const state = store.getState()

        return (
            <div>
                {state.posts.map((post,i) => {
                    var date = (new Date(post.date)).toLocaleDateString()
                    if(post._id === this.state.editing) {

                        return (
                        <EditPostItem
                            _id={post._id}
                            title={post.title}
                            url={post.url}
                            cords={post.cords}
                            review={post.review}
                            onRemove={()=>this.props.onRemove(post._id)}
                            onEdit={(new_title, new_content)=>this.editItem(new_title, new_content, post._id)}>
                        </EditPostItem> )
                    } else {
                        return (
                        <ShowPostItem

                            _id={post._id}
                            title={post.title}
                            url={post.url}
                            cords={post.cords}
                            review={post.review}
                            onRemove={()=>this.props.onRemove(post._id)}
                            onEdit={()=>this.setEditingItem(post._id)}>
                        </ShowPostItem> )
                    }
                })}
            </div>
        )//return
    }//render
}

ShowPostList.contextTypes = {
    store: PropTypes.object
}

export default ShowPostList
