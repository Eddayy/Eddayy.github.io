import SignIn from './signin';
import Auth from '../containers/auth';
import { Subscribe } from 'unstated'
import PostContainer from './PostContainer'
import React from 'react'
import GoogleIcon from '../components/icons/google';
import { Formik } from 'formik';

const Post = ()=>{
  return(
    <Subscribe to={[PostContainer]}>
      {postContainer=>(
        <Auth>
        {auth=>{
          return(
          auth.isAuthed?
            <div className='columns is-12 is-mobile is-gapless'>
              <div className='column has-text-centered is-1-tablet is-2-mobile is-horizontal-center'>
                <figure className="image is-32x32">
                  <img className="is-rounded" src={auth.photoURL}/>
                </figure>
              </div>
              <div className='column'> 
              <Formik
                initialValues={{post:''}}
                validate={values=>{
                  let errors = {};
                  if(!values.post){
                    errors.post = 'Please enter text';
                  }
                  else if(values.post.length > 500){
                    errors.post = 'Maximum Length 500';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                  postContainer.postComment(auth.displayName,values.post,auth.photoURL)
                  values.post = null
                }}     
              >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <textarea className="textarea" name='post' rows="2" onChange={handleChange} placeholder="Tell me what are you thinking" value={values.post  || ''}></textarea>
                    </div>
                  </div>
                  <div className='control has-text-danger' style={{position:'absolute'}}>
                    {errors.post && touched.post && errors.post}
                  </div>
                  <div className="field is-grouped is-grouped-right">
                    <div className="control">
                      <button type='button' className='button' onClick={auth.signOut}>
                        Sign out
                      </button>
                    </div>
                    <div className="control">
                      <button className='button is-link' disabled={isSubmitting}>
                        Post
                      </button>
                      </div>
                  </div>
                </form>
              )}
              </Formik>
              </div>
            </div>  
            :
            <div className='field'>
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