import SignIn from './signin';
import Auth from '../containers/auth';
import { Subscribe } from 'unstated'
import PostContainer from './PostContainer'
import React from 'react'
import GoogleIcon from '../components/icons/google';

const Post = ()=>{
  return(
    <Subscribe to={[PostContainer]}>
      {postContainer=>(
        <Auth>
        {auth=>{
          return(
          auth.isAuthed?
            <form onSubmit={(event) => {
              event.preventDefault();
              postContainer.postComment(auth.displayName,event.target[0].value,auth.photoURL)
              //postComment()
            }}>
              <div className="field">
                <div className="control">
                  <label className="label has-text-left">Post a comment</label>
                  <textarea className="textarea" rows="2" placeholder="Tell me what are you thinking"></textarea>
                </div>
              </div>
              <div className="field is-grouped is-grouped-right">
                <div className="control">
                  <button type='button' className='button' onClick={auth.signOut}>
                    Sign out
                  </button>
                </div>
                <div className="control">
                  <button className='button is-link '>
                    Post
                  </button>
                  </div>
              </div>
            </form>:
            <div>
              Please login to post a comment<br/>
              <SignIn
                onClick={() => (auth.isAuthed ? auth.signOut() : auth.signIn('google'))}
                icon={auth.isAuthed ? null : <GoogleIcon />}
                text={auth.isAuthed ? 'Sign Out' : 'Sign in with Google'}
              />
            </div>
          )
          }
        }
        </Auth>
      )}  
    </Subscribe>
  )
}

export default Post