import SignIn from '../components/signin/index';
import GoogleIcon from '../components/icons/google';
import Auth from '../containers/auth';
import React from 'react'

class comments extends React.Component{
  render(){
    return(
      <Auth>
      {auth => (  
        
        <SignIn
          onClick={() => (auth.isAuthed ? auth.signOut() : auth.signIn('google'))}
          icon={auth.isAuthed ? null : <GoogleIcon />}
          text={auth.isAuthed ? 'Sign Out' : 'Sign in with Google'}
        />
        )}
      </Auth>
    )
  }

}

export default comments
