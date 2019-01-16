import React from 'react'
import PropTypes from 'prop-types'
import firebase from '../services/firebase'

const INITIAL_STATE = {
  uid: '',
  isAnonymous: null,
  // // some other properties from the user object that may be useful
  // email: '',
  displayName: 'Anonymous User',
  photoURL: '/defaultpic.jpg',
}

class Auth extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  static contextTypes = {
    firebase: PropTypes.object,
  }

  state = INITIAL_STATE

  componentDidMount() {
    const { auth } = firebase
    // onAuthStateChanged returns an unsubscribe method
    this.stopAuthListener = auth().onAuthStateChanged(user => {
      if (user) {
        // if user exists sign-in!
        this.signIn(user)
      } else {
        // otherwise sign-out!
        this.signOut()
      }
    })
  }

  componentWillUnmount() {
    this.stopAuthListener()
  }

  handleSignIn = provider => {
    const { auth } = firebase

    switch (provider) {
      // the auth listener will handle the success cases
      case 'google':
        return auth()
          .signInWithPopup(
            new auth.GoogleAuthProvider().addScope(
              'https://www.googleapis.com/auth/plus.login',
            ),
          )
          .then(result => {
            //var token = result.credential.accessToken;
            //var user = result.user;
            //console.log({user,token})
          })
          .catch(error => {
            // eslint-disable-next-line no-console
            console.error(error)
            // TODO: notify the user of the error
            return error
          })

      case 'anonymous':
        return auth()
          .signInAnonymously()
          .catch(error => {
            // eslint-disable-next-line no-console
            console.error(error)
            // TODO: notify the user of the error
            return error
          })

      default:
        const reason = 'Invalid provider passed to signIn method'
        // eslint-disable-next-line no-console
        console.error(reason)
        return Promise.reject(reason)
    }
  }

  handleSignOut = () => {
    const { auth } = firebase

    return auth().signOut()
  }

  signIn(user) {
    const { uid, isAnonymous, displayName, photoURL } = user
    this.setState({
      uid,
      isAnonymous,
      displayName,
      photoURL,
    })
  }

  signOut() {
    this.setState(INITIAL_STATE)
  }

  render() {
    // If uid doesn't exist in state, the user is not signed in.
    // A uid will exist if the user is signed in anonymously.
    // We'll consider anonymous users as unauthed for this variable.
    const isAuthed = !!(this.state.uid && !this.state.isAnonymous)

    return this.props.children({
      ...this.state,
      signIn: this.handleSignIn,
      signOut: this.handleSignOut,
      isAuthed,
    })
  }
}

export default Auth
