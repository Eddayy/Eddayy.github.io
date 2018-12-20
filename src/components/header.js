import { Link } from 'gatsby'
//import PropTypes from 'prop-types'
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

import '../style/bulma.scss';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
//import {findDOMNode} from 'react-dom'
//= ({ siteTitle,repo }) 
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: true,
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
    <section class='hero'>
      <nav class="navbar has-shadow">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-item">
              <Link to='/' >
                <div class="title">
                <span class="icon is-large has-text-primary"> 
                  <i class="fa fa-flask"></i>
                </span>
                  {this.props.siteTitle}
                </div>
              </Link>
            </div>
            <a role="button" onClick={this.toggleClass}  className={this.state.active?'navbar-burger is-active ':'navbar-burger'}>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
            <div className={this.state.active?'is-active navbar-menu':'navbar-menu'}>
              <div class='navbar-start'>
                <Link class="navbar-item" to='/blog'>
                  <span class="icon is-medium has-text-info"> 
                  <i class="fa fa-th-large"></i>
                  </span>
                    Blog
                </Link>
                <Link class="navbar-item" to='/blog'>
                  <span class="icon is-medium has-text-success"> 
                    <i class="fa fa-user-circle"></i>
                  </span>
                    About me
                </Link>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link" >
                  <span class="icon is-medium has-text-danger"> 
                      <i class="fa fa-briefcase"></i>
                  </span>
                    Side Projects
                  </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item" href='/' >
                      Working in Progress
                      <br/>
                      One day..
                    </a>
                    
          
                  </div>
                </div>
                
              </div>
              <div class='navbar-end'>
                <OutboundLink class="navbar-item " href={this.props.repo} >
                  <span class="icon is-large has-text-black-bis"> 
                    <i class="fa fa-github"></i>
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
