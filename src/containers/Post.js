import SignIn from './signin';
import Auth from '../containers/auth';
import { Subscribe } from 'unstated'
import PostContainer from './PostContainer'
import React from 'react'
import { Formik } from 'formik';
import ReCAPTCHA from "react-google-recaptcha";

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
                  <img className="is-rounded" src={auth.photoURL} alt='Profile Pic'/>
                </figure>
              </div>
              <div className='column'> 
              <Formik
                //setup recapcha service
                initialValues={{
                  post:'',
                  recaptcha:false, 

                }}
                validate={values=>{
                  let errors = {};
                  if(!values.post){
                    errors.post = 'Please enter text';
                    values.recaptcha = false
                  }
                  else if(values.post.length > 500){
                    errors.post = 'Maximum Length 500';
                    values.recaptcha = false
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  if(values.recaptcha === false ){
                    values.recaptcha = true 
                    setSubmitting(false);
                    return
                  }
                  setSubmitting(false);
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
                    {values.recaptcha && 'Please enter captcha'}
                  </div>
                  <div className="field is-grouped is-grouped-right">
                    <div className="control">
                      <button type='button' className='button' onClick={auth.signOut}>
                        Sign out
                      </button>
                    </div>
                    <div className="control">
                      <button className='button is-link' type='submit'  onClick={()=>{
                          
                        }} disabled={isSubmitting}>
                        Post
                      </button>
                      </div>
                  </div>
                  {values.recaptcha && 
                  <div className='field is-grouped is-grouped-centered'>
                    <div className="control">
                      <ReCAPTCHA
                        sitekey="6Le8QooUAAAAAKEE3Ot7Dg1uajCl_qffzgsgAXfv"
                        onChange={()=>{
                          postContainer.postComment(auth.displayName,values.post,auth.photoURL)
                          values.post = ''
                          values.recaptcha = false
                          console.log(values)
                        }}
                      />
                    </div>  
                  </div> }
                  
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