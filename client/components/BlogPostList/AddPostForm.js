import { Component } from 'react'
import Minimap from '../Maps/showmap.js';

class AddPostForm extends Component {

    render () {
        let title = ''
        let review = ''
        let url = ''
        let cords = {}
        return (

            <div className="post-add-form">
                <form onSubmit={ e =>{

                        e.preventDefault()
                        this.props.onAdd(title.value, review.value, url.value, window.submitLatLng)
                        title.value = ''
                        review.value = ''
                        url.value = ''
                        cords.value = window.submitLatLng
                        this.props.history.push('/')
                        window.location = "/";
                    }}>
                    <input      placeholder="Add image URL here..."
                                ref={input=>url=input}>
                    </input>
                    <input      placeholder="Add title here..."
                                ref={input=>title=input}>
                    </input>
                    <textarea   className="textArea"
                                placeholder="Add content here..."
                                ref={input=>review=input}>
                    </textarea>
                    <button>Add Blog Post</button>
                </form>
                <iframe width="500" height="500" name="myframe1" id="myframe1">
      <div id="submitMap">
      <Minimap lat={40} lng={-74}  />
      </div>
      </iframe>
            </div>
        )
    }
}

export default AddPostForm
