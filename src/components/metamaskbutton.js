import React from 'react'
import Modal from "react-responsive-modal";
import Image from './image'
class metamaskbutton extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      err:'',
      img:'2_pay_mm_off.png'
    };
    this.onOpenModal = this.onOpenModal.bind(this)
    this.startmetamask = this.startmetamask.bind(this)
  }
  

  onOpenModal(err){
    this.setState({ open: true, err:err});
  };

  onCloseModal = () => {
    this.setState({ open: false});
  };
  
  async startmetamask(){
    if (typeof window.ethereum === 'undefined') {
      this.onOpenModal('You need to install MetaMask to use this feature. Download here: https://metamask.io')
      return
    }
    const accounts = await window.ethereum.enable()
    const account = accounts[0]
    window.web3.eth.sendTransaction({
      to: '0xEddae736256B1F3cf1a9F278CfdcB1E45f4c5515',
      from: account,
      value: window.web3.toWei('0.01', 'ether'),
    }, function (err, transactionHash) {
      if (err) return this.onOpenModal('Oh no!: ' + err.message)
      this.onOpenModal(`Transaction successful! Thank you so much. You can track your transaction here: ${transactionHash}`)
    })
  }

  render(){
    return(
      <div>
        <button className='tip-button' aria-hidden="true" onClick={this.startmetamask}>
        <Image
          imgsrc={this.state.img}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
        />
        </button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <br/>
          <p>
            {this.state.err}
          </p>
        </Modal>
      </div>
    )
  }
  
}

export default metamaskbutton