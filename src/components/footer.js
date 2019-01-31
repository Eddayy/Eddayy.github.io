import React from 'react'
import {StaticQuery,graphql, Link} from 'gatsby'
import MetamaskButton from './metamaskbutton'
import moment from 'moment'

const footer = ({data}) => {
  console.log(data)
  return (
    <StaticQuery 
      query={graphql`
      {
        gitCommit {
          commitDate
          commitSubject
        }
      }
      `
      }
      render={data=>(
        <footer className="footer has-background-white-ter">
          <div className="container has-text-grey-dark hero-body">
            <div className="columns">
              <div className="column">
                Contact
                <br />
                +60179882188
                <br />
                edmundtay96@gmail.com
              </div>
              <div className="column">
                Repository info
                <br />
                Last commited on {moment(data.gitCommit.commitDate*1000).format('DD MMM YYYY LT')}
                  <br />
                {data.gitCommit.commitSubject}
              </div>
              <div className="column">
                Donations
                <MetamaskButton />
                Btc:1Bqwtx1tDmrxsrZpyqiU8sMiT2jYiwYgoj
                <br />
                Eth:0xEddae736256B1F3cf1a9F278CfdcB1E45f4c5515
              </div>
            </div>
            <div className='has-text-centered is-size-7'>
              © {new Date().getFullYear()}, Built by Edmund. <Link to='/privacy'>Privacy Policy</Link>
            </div>
          </div>
        </footer>
      )}
    
    />
  )
}

export default footer