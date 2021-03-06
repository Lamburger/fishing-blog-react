import { PostListContainer, AddPostContainer }  from './BlogPostList/BlogPostContainers'
import { ShowSinglePostContainer } from './BlogPostList/ShowSinglePost'
import { EditSinglePostContainer } from './BlogPostList/EditSinglePost'
import { LoginContainer } from './UserAuthentication/LoginContainer'
import { RegisterContainer } from './UserAuthentication/RegisterContainer'

import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Component } from 'react'
import { withRouter } from 'react-router'
import { PrivateRoute } from './PrivateRoute'

import { AboutContainer } from './Static/AboutContainer'

class BlogPostApp extends Component {
    render () {
        const { isLoggedIn } = this.props
        return <div>
            <div className="container">
                
                <Switch>
                    {/* Routes that are no-auth-only routes */}
                    <PrivateRoute isAuth={!isLoggedIn} path='/login' redirect='/' component={LoginContainer} />
                    <PrivateRoute isAuth={!isLoggedIn} path='/register' redirect='/' component={RegisterContainer} />

                    {/* Routes that are auth-only routes */}
                    <PrivateRoute isAuth={isLoggedIn} path='/addpost' redirect='/login' component={AddPostContainer} />
                    <PrivateRoute isAuth={isLoggedIn} path='/posts/:_id' redirect='/login' component={ShowSinglePostContainer}/>
                    <PrivateRoute isAuth={isLoggedIn} path='/editpost/:_id' redirect='/login' component={EditSinglePostContainer}/>

                    <Route exact path='/' component={PostListContainer}/>
                    <Route exact path='/about' component={AboutContainer}/>
                    <Redirect from='/*' to='/'/>
                </Switch>
            </div>
        </div>
    }
}

const BlogPostAppContainer = withRouter(connect(
    state => ({
        isLoggedIn: state.auth.isLoggedIn
    })
)(BlogPostApp))

export default BlogPostAppContainer
