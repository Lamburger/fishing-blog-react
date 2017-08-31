import { Component } from 'react'
import Minimap from '../Maps/showmap.js';

class AddPostForm extends Component {

    render () {
        let title = ''
        let review = ''
        let url = ''
        let cords = {}
        return (
            <div className="container">
                <div className="row">    
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
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
                                <div className="row">
                                    <div className="col-md-6">
                                        <input placeholder="Add image URL here..."
                                            className="form-control"
                                            ref={input=>url=input}>
                                        </input>
                                    </div>
                                    <div className="col-md-6">
                                        <input placeholder="Add title here..."
                                            className="form-control"
                                            ref={input=>title=input}>
                                        </input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12" style={{width: '100% !important', overflow: 'auto !important'}}>
                                        <textarea   className="form-control"
                                            placeholder="Add content here..."
                                            row="8"
                                            ref={input=>review=input}>
                                        </textarea>
                                        <button className="btn btn-primary btn-lg post-button">Add Blog Post</button>
                                    </div>
                                </div>
                            </form>
                            <iframe width="100%" height="500" name="myframe1" id="myframe1">
                                <div id="submitMap">
                                <Minimap lat={40} lng={-74}  />
                                </div>
                            </iframe>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default AddPostForm
