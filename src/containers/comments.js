import SignIn from '../components/signin/index';
import GoogleIcon from '../components/icons/google';
import Auth from '../containers/auth';
import React from 'react'
import Firebase from "firebase"
import firebase from '../services/firebase'
import moment from 'moment';
let state = { 
  comments:[],
  active:false,
};
class comments extends React.Component{
  constructor(props) {
    super(props)

    this.state = state
    this.toggleComment = this.toggleComment.bind(this)
  }
  toggleComment() {
    this.setState(state => ({
      active: !state.active,
    }))
    this.getComment()
  }
  //schema
  /*
  todo:
  1. set path
  2. make algorithm that single write wont read all document only the written one
  */

  postComment(name,text,pictureUrl){
    const {store} = firebase
    const docref = store.collection("Blogs").doc(this.props.path)
    const commentObj = {
      Name:name,
      Text:text,
      Posted: new Date().getTime(),
      PictureUrl:pictureUrl,
    }
    docref.update({
      comments: Firebase.firestore.FieldValue.arrayUnion(commentObj)
    })  
    .then(()=> {
      this.setState(state=>({
        active:true,
        comments:[...state.comments, commentObj]
      }))
      //trigger event
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  getComment(){
    const {store} = firebase
    const docRef = store.collection("Blogs").doc(this.props.path);
    //start loading gif
    docRef.get()
      .then(doc=> {
        //end loading
        if (doc.exists) {
          this.setState(state=>({
            comments:doc.data().comments
          }))
          console.log("Document data:", doc.data().comments);
        }
        else{
          store.collection("Blogs").doc(this.props.path).set({
            likes:0,
            comments:[]
          })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
        } 
      })
      .catch(function(error) {
        //end loading
        console.log("Error getting document:", error);
    });
  }
  componentWillUnmount() {
    // Remember state for the next mount
    state = this.state;
  }

  render(){
    const {store} = firebase  
    return(
      <Auth>
      {auth => (  
        <div> 
          <div>
            <b>Responses</b>
          </div>  
          <div className='has-text-centered'>
            {
            this.state.active? //todo highlight over disable login for
              <div>
                {auth.isAuthed?
                  <form onSubmit={(event) => {
                    event.preventDefault();
                    this.postComment(auth.displayName,event.target[0].value,auth.photoURL)
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
                }
                <div>
                  {this.state.comments.map(comment=>{
                    console.log(comment)
                    const {Name} = comment
                    const {Posted} = comment
                    const {PictureUrl} = comment
                    const {Text} = comment  
                    return(
                      <div key={Posted} className='columns is-12 is-mobile'>
                        <div className='column has-text-centered is-2 is-horizontal-center'>
                          <figure class="image is-32x32">
                            <img class="is-rounded" src={PictureUrl}/>
                          </figure>
                        </div>
                        <div className='column'>
                          <div className='columns is-mobile'>
                            <div className=''>
                              {Name}
                            </div>
                            <div className=''>
                              {moment(Math.round(Posted/100000), "YYYYMMDDHHMMSS").fromNow()}
                            </div>
                          </div>
                          <div className='columns'>
                            {Text}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>:
              <button className='button ' onClick={this.toggleComment}>
                Load comments
              </button>
            }
          </div>
        </div>
        )
      }
      </Auth>
    )
  }

}

export default comments
