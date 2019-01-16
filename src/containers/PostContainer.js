import { Container } from 'unstated'
import firebase from '../services/firebase'
import Firebase from 'firebase'

class PostContainer extends Container {
  state = {
    comments: [],
    likes: 0,
    active: false,
    path: '/',
  }

  toggleComment = () => {
    this.setState({ active: !this.state.active })
    this.getComment(this.state.path)
  }

  getComment = () => {
    const { store } = firebase
    const docRef = store.collection('Blogs').doc(this.state.path)
    //start loading gif
    docRef
      .get()
      .then(doc => {
        //end loading
        if (doc.exists) {
          this.setState(state => ({
            comments: doc.data().comments,
          }))
        } else {
          store
            .collection('Blogs')
            .doc(this.state.path)
            .set({
              likes: 0,
              comments: [],
            })
            .catch(function(error) {
              console.error('Error adding document: ', error)
            })
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error)
      })
  }

  postComment = (name, text, pictureUrl) => {
    const { store } = firebase
    const docref = store.collection('Blogs').doc(this.state.path)
    const commentObj = {
      Name: name,
      Text: text,
      Posted: new Date().getTime(),
      PictureUrl: pictureUrl,
    }
    docref
      .update({
        comments: Firebase.firestore.FieldValue.arrayUnion(commentObj),
      })
      .then(() => {
        this.setState(state => ({
          active: true,
          comments: [...state.comments, commentObj],
        }))
        //trigger event
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  }
}

export default PostContainer
