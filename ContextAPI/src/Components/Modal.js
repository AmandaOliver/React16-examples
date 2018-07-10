import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    document.body.appendChild(this.el);
  }
  closeModal() {
    document.body.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      <div className='container'>
        <div className='modal'>
          <button onClick={()=>this.closeModal()}className='close_button'>Close</button>
        </div>
      </div>,
        this.el,
      );
    }
  }
