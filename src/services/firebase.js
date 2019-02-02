import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'


const config = {
  apiKey: 'AIzaSyAvad8R_JYBxSm2xeJ7GCsHQyjRowS2_CY',
  authDomain: 'eddayywebsite.firebaseapp.com',
  // databaseURL: ,
  projectId: 'eddayywebsite',
  // storageBucket: ,
  // messagingSenderId: ,
}

class Firebase {
  constructor() {
    
    this.store = firebase.initializeApp(config).firestore()
    this.auth = firebase.auth
  }
}

export default new Firebase()
