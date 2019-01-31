import React from 'react'
import Bloglist from '../components/bloglist'
import Projectlist from '../components/projectlist'
import {Link} from  'gatsby'

class selector extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      blog: true,
      side: false
    }
  }

  render(){
    return(
    <div>
    <section className="hero">
      <div className="columns">
        <div className="container hero-body">
          <div className="tabs">
            <ul>
              <li className={this.state.blog && "is-active"} title="list of blog posts" onClick={()=>{this.setState({blog:true,side:false})}}>
                <Link to='/'>Blog</Link>
              </li>
              <li className={this.state.side && "is-active"} title="list of side projects"  onClick={()=>{this.setState({side:true,blog:false})}}>
                <Link to='/'>Side Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      {this.state.blog ? <Bloglist />:<Projectlist />}
      </div>
    ) 
  }
}

export default selector