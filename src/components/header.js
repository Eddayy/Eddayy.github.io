import { Link } from 'gatsby'
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

import '../style/bulma.scss';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    this.setState(prevState=>({
      active: !prevState.active,
    }))
  }
  
  render(){
    return(
    <section className='hero'>
      <nav className="navbar has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link className="" to='/' >
                <div className="title is-3">
                <span className="icon is-large has-text-primary"> 
                  <i className="fa fa-flask"></i>
                </span>
                  {this.props.siteTitle}
                </div>
              </Link>
            </div>
              <div role="button" onClick={this.toggleClass}  className={this.state.active?'navbar-burger is-active burger':'navbar-burger burger'}>
                <span></span>
                <span></span>
                <span></span>
              </div>
          </div>
            <div className={this.state.active?'is-active navbar-menu':'navbar-menu'}>
              <div className='navbar-start'>
                <Link className="navbar-item " to='/blog'>
                  <span className="icon is-medium has-text-info"> 
                  <i className="fa fa-th-large"></i>
                  </span>
                    Blog
                </Link>
                <Link className="navbar-item " to='/about'>
                  <span className="icon is-medium has-text-success"> 
                    <i className="fa fa-user-circle"></i>
                  </span>
                    About me
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link" >
                  <span className="icon is-medium has-text-danger"> 
                      <i className="fa fa-briefcase"></i>
                  </span>
                    Side Projects
                  </div>
                  <div className="navbar-dropdown">
                    <Link className="navbar-item " to='/' >
                      Working in Progress
                      <br/>
                      One day..
                    </Link>
                    
          
                  </div>
                </div>
                
              </div>
              <div className='navbar-end'>
                <OutboundLink className="navbar-item " href={this.props.repo}>
                  <span className="icon is-large has-text-black-bis"> 
                    <i className="fa fa-github"></i>
                  </span>
                    Github repo
                </OutboundLink>
              </div>
            </div>
            
          </div>
      </nav>
    </section>
    )
  }
}


export default Header
