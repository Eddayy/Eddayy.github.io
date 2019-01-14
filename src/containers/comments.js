import SignIn from '../components/signin/index';
import GoogleIcon from '../components/icons/google';
import Auth from '../containers/auth';
import React from 'react'
import firebase from '../services/firebase'

class comments extends React.Component{

  

  postComment(){
    const {store} = firebase
    store().collection("test").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  
  }

  render(){
    
  
    return(
      <Auth>
      {auth => (  
        <div>
        <button className='button' onClick={() => this.postComment()}>
          Test
        </button>
        
        <SignIn
          onClick={() => this.postComment()}//(auth.isAuthed ? auth.signOut() : auth.signIn('google'))}
          icon={auth.isAuthed ? null : <GoogleIcon />}
          text={auth.isAuthed ? 'Sign Out' : 'Sign in with Google'}
        />
        </div>
        )}
      </Auth>
    )
  }

}

export default comments
