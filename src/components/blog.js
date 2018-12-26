import { Link } from 'gatsby'
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

import '../style/bulma.scss';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class blog extends React.Component {
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
  
  render(){}
}


export default blog

/* @todo add a staticquery to get list of blogs
*/