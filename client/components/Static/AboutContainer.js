import { Component } from 'react'
import { connect } from 'react-redux'
class About extends Component {

    render () {
        return (
          <div>
            <h1>How it works!</h1>
            <h2>Welcome to the fishing blog!
            This is a simple blog where we fisherman can share our catches
            and fishing spots with other fisherman! Simply register and loginm,
            then you will be able to add a post with a picture of your catche
            and the coordinates!</h2>
          </div>
        )
    }
}

export const AboutContainer = connect(
    null,
    dispatch => ({

    })
)(About)
