import React from 'react'
import MetamaskButton from './metamaskbutton'

const footer = () => {
  return (
    <footer className="footer has-background-white-ter">
      <div className="container has-text-grey hero-body">
        <div className="columns">
          <div className="column">
            Feedback
            <br />
            edmundtay96@gmail.com
          </div>
          <div className="column">
            Contact
            <br />
            +60179882188
            <br />
            edmundtay96@gmail.com
          </div>
          <div className="column">
            Donations
            <br />
            <MetamaskButton />
            <br />
            Bitcoin:
            <br />
            1Bqwtx1tDmrxsrZpyqiU8sMiT2jYiwYgoj
            <br />
            Etheruem:
            <br />
            0xEddae736256B1F3cf1a9F278CfdcB1E45f4c5515
            <br />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
