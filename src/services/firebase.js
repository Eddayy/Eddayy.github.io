import firebase from 'firebase'
import 'firebase/firestore'

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
    firebase.initializeApp(config)
    this.store = firebase.firestore()
    this.store.settings({ timestampsInSnapshots: true })
    this.auth = firebase.auth
  }
}

export default new Firebase()
