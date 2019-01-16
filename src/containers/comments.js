import SignIn from './signin';
import GoogleIcon from '../components/icons/google';
import Auth from '../containers/auth';
import Firebase from "firebase"
import firebase from '../services/firebase'

import PostState from './PostContainer'
import CommentRow from './commentRows'
import React from 'react'
import { Provider ,Subscribe} from 'unstated'
import Post from './Post'


let PostContainer = new PostState()


class comments extends React.Component{
  constructor(props) {
    super(props)
    this.PostContainer = new PostState()
  }
  render(){
    this.PostContainer.setState({path:this.props.path})
    return(
      <Provider inject={[this.PostContainer]}>
        <Subscribe to={[this.PostContainer]}>
          {postContainer=>
            postContainer.state.active?
            <div>
              <Post />
              <CommentRow comments={postContainer.state.comments} />
            </div>:
            <button className='button ' onClick={postContainer.toggleComment}>
              Load comments
            </button>
          }
        </Subscribe>
      </Provider>
    )
  }

}

export default comments
