import PostState from './PostContainer'
import CommentRow from './commentRows'
import React from 'react'
import { Provider, Subscribe } from 'unstated'
import Post from './Post'

class comments extends React.Component {
  constructor(props) {
    super(props)
    this.PostContainer = new PostState()
  }
  render() {
    this.PostContainer.setState({ path: this.props.path })
    return (
      <Provider inject={[this.PostContainer]}>
        <Subscribe to={[this.PostContainer]}>
          {postContainer => (
            <div className="has-text-centered">
              <div className="label">Responses</div>
              {postContainer.state.active ? (
                <div>
                  <Post />
                  <CommentRow comments={postContainer.state.comments} />
                </div>
              ) : (
                <button
                  className="button"
                  onClick={postContainer.toggleComment}>
                  Load comments
                </button>
              )}
            </div>
          )}
        </Subscribe>
      </Provider>
    )
  }
}

export default comments
